"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Section() {
  const [currentPage, setCurrentPage] = useState(0)

  // Steps or FAQ items
  const stepGroups = [
    [
      { number: 1, text: "First step description or FAQ question with detailed explanation." },
      { number: 2, text: "Second step description with instructions on how to proceed." },
      { number: 3, text: "Third step with additional information and guidance." },
      { number: 4, text: "Final step with completion details and next actions." },
    ],
    [
      { number: 5, text: "Additional step one with more information and details." },
      { number: 6, text: "Additional step two with further instructions." },
      { number: 7, text: "Additional step three with more guidance." },
      { number: 8, text: "Additional step four with final details." },
    ],
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev === stepGroups.length - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? stepGroups.length - 1 : prev - 1))
  }

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Steps or FAQ content */}
          <div className="flex flex-col">
            {/* Heading */}
            <div className="mb-2 h-4 w-36 rounded bg-zinc-800"></div>

            {/* Subheading */}
            <div className="mb-6 h-6 w-64 rounded bg-zinc-800"></div>

            {/* Content box */}
            <div className="mb-6 rounded-lg bg-zinc-800/50 p-6">
              {/* Steps list */}
              <div className="space-y-6">
                {stepGroups[currentPage].map((step) => (
                  <div key={step.number} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">
                      {step.number}
                    </div>
                    <div className="h-4 w-full rounded bg-zinc-700"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={prevPage}
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="h-4 w-16 rounded bg-zinc-800"></div>

              <Button
                onClick={nextPage}
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Gradient image */}
          <div className="h-80 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-96"></div>
        </div>
      </div>
    </section>
  )
}
