import type { Metadata } from "next";
import { ReduxProvider } from "@/store/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umurava | Skills Challenges",
  description: "EdTech Product called Skills Challenges",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="antialiased">
      <ReduxProvider>{children}</ReduxProvider>
      </body>
      </html>
  );
}
