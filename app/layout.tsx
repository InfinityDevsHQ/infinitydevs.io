import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "$/components/ui/sonner";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinity Devs",
  description:
    "Infinity Devs is a creative agency specializing in software development, website design, graphic design, and Figma design. Transform your ideas into reality with our expert team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
