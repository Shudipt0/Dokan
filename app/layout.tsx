

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ContextToggleProvider } from "@/context/NavbarToggleContext";


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
      <ContextToggleProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}  cz-shortcut-listen="true"
      >
        <Navbar/>
        {children}

      </body>
      </ContextToggleProvider>
    </html>
  );
}
