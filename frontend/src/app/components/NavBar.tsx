"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <header className={`w-full bg-zinc-900 transition-all ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold text-white">
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            <Link href="/user1" className="text-sm font-medium text-white hover:text-gray-300">
              USER1
            </Link>
            <Link href="/user2" className="text-sm font-medium text-white hover:text-gray-300">
              USER2
            </Link>
            <Link href="/gift" className="text-sm font-medium text-white hover:text-gray-300">
              GIFT MODAL
            </Link>
            <Link href="/app" className="text-sm font-medium text-white hover:text-gray-300">
              GET THE ANDROID APP
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 text-white">
              <nav className="flex flex-col space-y-4 pt-10">
                <Link href="/user1" className="text-sm font-medium hover:text-gray-300">
                  USER1
                </Link>
                <Link href="/user2" className="text-sm font-medium hover:text-gray-300">
                  USER2
                </Link>
                <Link href="/gift" className="text-sm font-medium hover:text-gray-300">
                  GIFT MODAL
                </Link>
                <Link href="/app" className="text-sm font-medium hover:text-gray-300">
                  GET THE ANDROID APP
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Carousel Ticker */}
      <div className="w-full bg-zinc-800 py-2 text-center text-sm text-white">
        <CarouselTicker />
      </div>
    </div>
  )
}

function CarouselTicker() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % 1000)
    }, 30) // Adjust speed here

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block" style={{ transform: `translateX(${position}px)` }}>
        Carousel Ticker w variable speed • Carousel Ticker w variable speed • Carousel Ticker w variable speed •
        Carousel Ticker w variable speed • Carousel Ticker w variable speed • Carousel Ticker w variable speed
      </div>
    </div>
  )
}
