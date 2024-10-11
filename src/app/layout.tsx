import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Analytics from "@/components/Analytics";
import Head from "next/head";

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
      <Head>
        {/* AdSense meta tag */}
        <meta name="google-adsense-account" content="ca-pub-9931033884121639" />
      </Head>
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
