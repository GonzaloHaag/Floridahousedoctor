import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { Header } from "@/components";

const roboto = Roboto({
  subsets:['latin'],
  weight:['100','300','400','500','700','900'],
  display:"swap"
});
export const metadata: Metadata = {
  title: "Home Services Directory |",
  description: "Services Directory Description",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} antialiased`}>
      <body
        className="antialiased min-h-dvh"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
