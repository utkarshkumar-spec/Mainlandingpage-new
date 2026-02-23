import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/provider/provider";
import FullNavbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "synappses",
  description: "Everything you need for your Ed-Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} font-sans antialiased`}
      >

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
