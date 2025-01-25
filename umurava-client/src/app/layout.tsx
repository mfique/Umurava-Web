import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umurava | Skills challenges",
  description: "EdTech Product called Skills Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
