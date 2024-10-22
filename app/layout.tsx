import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "@/context/dark-mode-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
