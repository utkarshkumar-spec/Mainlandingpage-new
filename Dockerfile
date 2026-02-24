# 1. Base Image
FROM node:20-alpine AS base
RUN corepack enable
WORKDIR /app

# 2. Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

# 3. Builder
FROM base AS builder
WORKDIR /app

# ---- ENV INJECTION (IMPORTANT) ----
# Optional build args (future-proof)
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_ADMIN_PANEL_URL
ARG OPENAI_API_KEY

# Make them available during build
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_ADMIN_PANEL_URL=${NEXT_PUBLIC_ADMIN_PANEL_URL}
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
ENV NEXT_TELEMETRY_DISABLED=1
# ----------------------------------

COPY --from=deps /app/node_modules ./node_modules

# Copy env file injected by Jenkins
COPY .env .env

# Copy source code
COPY . .

# Build Next.js
RUN npm run build

# 4. Runner (Standalone)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -g 1001 -S nodejs \
 && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
