import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Analytics from "@/components/Analytics";

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
      </body>
    </html>
  );
}
