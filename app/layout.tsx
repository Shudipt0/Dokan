'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ContextToggleProvider } from "@/context/NavbarToggleContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchModal from "./_components/SearchModal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// create a client
const queryClient = new QueryClient();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <QueryClientProvider client={queryClient}>
      <ContextToggleProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}  cz-shortcut-listen="true"
      >
        <Navbar/>
     <SearchModal/>

        {children}

      </body>
      </ContextToggleProvider>
      </QueryClientProvider>
    </html>
  );
}
