import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasato | Premium Restaurant Experience",
  description:
    "Brasato offers a premium dining experience with delicious cuisine, elegant ambiance, and exceptional service.",
  keywords: "restaurant, fine dining, Brasato, Karachi, premium dining, Italian cuisine",
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
