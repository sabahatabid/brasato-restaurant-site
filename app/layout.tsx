import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasato — Delicious Food, Unforgettable Experience",
  description:
    "Experience the finest Italian cuisine at Brasato. Fresh ingredients, authentic recipes, and a warm atmosphere await you.",
  keywords: "restaurant, Italian food, dining, fine dining, Brasato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-cream">{children}</body>
    </html>
  );
}
