"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from 'next/navigation';

const NavLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Features', path: '/features' },
  { id: 3, name: 'Pricing', path: '/pricing' },
];

export function MainNav() {

  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <>
      <header className="flex items-center h-35 px-4 border-b shrink-0 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold py-2" prefetch={true}>
          <Image src="/images/logo-color.webp" width={306} height={5} alt="Optimized AI" />
          <span className="sr-only">Optimized AI</span>
        </Link>
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
          {NavLinks.map((link) => {
            return (
              <Link href={link.path} key={link.id}
                className={isActive(link.path) ? 'font-bold' : 'text-muted-foreground'}
              >
                {link.name}
              </Link>
            )
          })}
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
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
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

    </>
  )
}
