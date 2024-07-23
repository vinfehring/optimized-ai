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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <div className="flex flex-col min-h-dvh">
            <header className="flex items-center h-35 px-4 border-b shrink-0 md:px-6">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={true}>
                <Image src="/images/logo-color.webp" width={381} height={80} alt="Optimized AI" />
                <span className="sr-only">Optimized AI</span>
              </Link>
              <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
                <Link href="/" className="font-bold" prefetch={true}>
                  Home
                </Link>
                <Link href="/features" className="text-muted-foreground" prefetch={true}>
                  Features
                </Link>
                <Link href="/pricing" className="text-muted-foreground" prefetch={true}>
                  Pricing
                </Link>
                <Button>Sign In</Button>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Image src="/images/logo-color.webp" width={381} height={80} alt="Optimized AI" />
                    </Link>
                    <Link href="/" className="font-bold" prefetch={true}>
                      Home
                    </Link>
                    <Link href="/features" className="text-muted-foreground" prefetch={true}>
                      Features
                    </Link>
                    <Link href="/pricing" className="text-muted-foreground" prefetch={true}>
                      Pricing
                    </Link>
                    <Button>Sign Up</Button>
                    <Button>Sign In</Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
