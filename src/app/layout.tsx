import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";

const fontSans = Aleo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nada Ayu Lestari",
  description:
    "Hai, aku Nada Ayu Lestari, tapi panggil saja Nada. Genre favoritku? Rock, pastinya. Tapi, jujur aja, banyak! Rock, Pop, Country/Folk, Elektronik, Indie… agak campur aduk ya.",
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
