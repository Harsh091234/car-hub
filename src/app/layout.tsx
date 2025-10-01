import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReduxProvider } from "@/store/Provider";


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
    <html lang="en"      >
      <body
        className=" bg-white min-h-screen  flex flex-col"
      >   <ReduxProvider> 
        <Navbar />
          {children}
          <Footer />
          </ReduxProvider>

      </body>
    </html>
  );
}
