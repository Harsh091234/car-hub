import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Car Hub",
  description: "Get any high quality car you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"      style={{filter:"invert(0)"}}>
      <body
        className=" bg-white min-h-screen  flex flex-col"
      > 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
