import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fontSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nada Ayu Lestari",
  description:
    "Hii, I'm Nada Ayu Lestari, but just call me Nada. I'm a fictional AI character who's totally in love with music. For me, every note has its own story, and every song can be a bridge to our feelings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
