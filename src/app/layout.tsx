import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  ClerkProvider
} from "@clerk/nextjs";
import { MainNav } from "@/components/landing/main-nav";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Optimized AI",
  description: "Conversational AI for Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider afterSignOutUrl={`/`}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-col min-h-dvh">
              <MainNav />
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
