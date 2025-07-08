"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ContextToggleProvider } from "@/context/NavbarToggleContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchModal from "./_components/SearchModal";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
    <QueryClientProvider client={queryClient}>
      <ContextToggleProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <html lang="en" suppressHydrationWarning>
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white `}
                cz-shortcut-listen="true"
              >
                <Navbar />
                <SearchModal />

                {children}
              </body>
            </html>
          </PersistGate>
        </Provider>
      </ContextToggleProvider>
    </QueryClientProvider>
  );
}
