import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            brandName,
            industry,
            targetAudience,
            themeStyle,
            mood,
            baseColor,
            darkMode,
        } = body;

        if (!brandName || !themeStyle) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const prompt = `
You are a professional UI/UX designer.

Generate a complete LMS color palette based on:

Brand Name: ${brandName}
Industry: ${industry}
Target Audience: ${targetAudience}
Theme Style: ${themeStyle}
Mood: ${mood}
Base Color: ${baseColor || "Not specified"}
Dark Mode: ${darkMode ? "Yes" : "No"}

Rules:
- All values must be valid HEX codes.
- Ensure good contrast for accessibility.
- Background and text must be readable.
- Return ONLY valid JSON.
- Do not include explanations.

Return strictly in this format:
{
  "primary": "#HEX",
  "secondary": "#HEX",
  "accent": "#HEX",
  "background": "#HEX",
  "text": "#HEX"
}
`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are an expert UI designer specializing in color theory and SaaS platforms.",
                },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
        });

        const content = response.choices[0].message.content;

        if (!content) {
            throw new Error("Empty response from AI");
        }

        const parsed = JSON.parse(content);

        return NextResponse.json(parsed);

    } catch (error: any) {
        console.error("Theme generation error:", error);

        return NextResponse.json(
            { error: "Failed to generate theme" },
            { status: 500 }
        );
    }
}