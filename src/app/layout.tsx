import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Education & Careers",
  description: "Local development foundation for the GEC website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
