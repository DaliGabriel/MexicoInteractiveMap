import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Analytics from "@/components/Analytics";
import Script from "next/script";

const roboto = Roboto({
  weight: ["400", "500", "700"], // Specify weights you want
  subsets: ["latin"], // Ensure Latin characters are included
});

export const metadata: Metadata = {
  title: "México interactive map",
  description: "Learn about México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9931033884121639"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
