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
  { id: 1, name: 'Dashboard', path: '/dashboard' },
  { id: 2, name: 'Customers', path: '/dashboard/customers' },
  { id: 3, name: 'Promotions', path: '/dashboard/promotions' },
  { id: 4, name: 'Reports', path: '/dashboard/reports' },
];



export function MainNav() {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image src="/images/logo-color.webp" height={40} width={341} alt="Optimized AI" />
          </Link>
          {NavLinks.map((link) => {
            return (
              <Link href={link.path} key={link.id}
                className={isActive(link.path) ? 'font-bold' : 'text-muted-foreground'}
              >
                {link.name}
              </Link>
            )
          })}
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
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image src="/images/logo-color.webp" height={80} width={381} alt="Optimized AI" />
              </Link>
              {NavLinks.map((link) => {
                return (
                  <Link href={link.path} key={link.id}
                    className={isActive(link.path) ? 'hover:text-foreground' : 'text-muted-foreground hover:text-foreground'}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <UserButton />
        </div>
      </header>
    </>
  )
}
