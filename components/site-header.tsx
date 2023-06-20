import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BasicIcons, Logo } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100"
          >
            <Logo className="h-5 w-5" />
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center gap-3 p-6">
              <li className="row-span-3">
                <Link href="/">
                  <Button variant="ghost">Home</Button>
                </Link>
              </li>
              <li className="row-span-3">
                <Link href="/blog">
                  <Button variant="ghost">Blog</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Dialog>
            <DialogTrigger asChild className="block md:hidden">
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col justify-center py-12 sm:max-w-[425px]">
              <Link href="/">
                <Button variant="ghost" className="w-full text-lg">
                  Home
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="ghost" className="w-full text-lg">
                  Blog
                </Button>
              </Link>
              <DialogFooter>
                <SecondaryMenu className="flex w-full justify-center md:hidden" />
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <SecondaryMenu className="hidden md:flex" />
        </div>
      </div>
    </header>
  )
}

export function SecondaryMenu(props: { className?: string }) {
  return (
    <nav className={`${props.className} items-center space-x-1`}>
      <Link href="github.com" target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <BasicIcons.gitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href="/twitter.com" target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <BasicIcons.twitter className="h-5 w-5 fill-current" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
      <ThemeToggle />
    </nav>
  )
}
