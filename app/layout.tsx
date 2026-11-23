import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default : "Bello Olamilekan - Full-Stack Engineer",
    template : "%s | Bello Olamilekan"
  },
  description: "Full-stack engineer building fast, reliable web products with Next.js, Go and PostgreSQL.",
  authors : [{
    name : "Bello Olamilekan"
  }]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className={`${jakarta.variable} ${geistMono.variable} font-sans antialiased min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
