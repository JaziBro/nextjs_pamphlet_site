"use client"

import type React from "react"
import { PersonStanding, Infinity, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HiCash } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";



export default function ContactSection() {
  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Contact form and info */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
              <div className="h-6 w-36 rounded bg-zinc-800"></div>
              <div className="h-4 w-64 rounded bg-zinc-800"></div>
            </div>


            {/* Contact information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PersonStanding className="h-5 w-5 text-gray-400" />
                <div className="h-4 w-48 rounded bg-zinc-800"></div>
              </div>
              <div className="flex items-center gap-3">
                <HiCash className="h-5 w-5 text-gray-400" />
                <div className="h-4 w-36 rounded bg-zinc-800"></div>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineUsers className="h-5 w-5 text-gray-400" />
                <div className="h-4 w-48 rounded bg-zinc-800"></div>
              </div>
              <div className="flex items-center gap-3">
                <Infinity className="h-5 w-5 text-gray-400" />
                <div className="h-4 w-56 rounded bg-zinc-800"></div>
              </div>
            </div>

            {/* Submit button with navigation */}
            <div className="flex items-center space-x-4">
              <Button
                type="submit"
                className="flex h-10 w-32 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <span className="text-xs">Submit</span>
              </Button>

              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Gradient area (could be replaced with a map) */}
          <div className="h-96 w-full overflow-hidden bg-gradient-to-b from-white to-zinc-800"></div>
        </div>
      </div>
    </section>
  )
}
