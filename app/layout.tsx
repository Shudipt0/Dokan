

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import SearchModal from "./_components/SearchModal";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
            <html lang="en" suppressHydrationWarning>
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}
                cz-shortcut-listen="true"
              >
                <Providers>
                <Navbar />
                <SearchModal />

                {children}
                </Providers>
              </body>
            </html>
    
  );
}
