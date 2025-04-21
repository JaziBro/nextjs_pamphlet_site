"use client"

import { useState } from "react"
import { ArrowDownLeft, ArrowDownRight, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function FileUploadSection() {
  const [progress, setProgress] = useState(70)
  const [isChecked, setIsChecked] = useState(true)

  return (
    <section className="relative w-full bg-zinc-900 py-16 md:py-24 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Upload area with arrow */}
          <div className="relative">
            <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80"></div>
            <div className="absolute left-0 top-0 -translate-x-1/4 -translate-y-1/4"></div>
          </div>

          {/* Right side - Form fields and controls */}
          <div className="flex flex-col space-y-6">
            {/* Content area */}
            <div className="relative">
              <div className="h-32 w-full rounded-md bg-zinc-800"></div>
              <div className="absolute right-0 top-0 -translate-y-1/4"></div>
            </div>

            {/* Progress bar */}
            <Progress value={progress} className="h-2 w-full bg-zinc-800" />

            {/* Additional field */}
            <div className="h-10 w-full rounded-md bg-zinc-800"></div>

            {/* Checkbox with label */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded ${isChecked ? "bg-pink-600" : "bg-zinc-700"}`}
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Check className="h-3 w-3 text-white" />}
              </div>
              <div className="h-4 w-48 rounded bg-zinc-800"></div>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="h-4 w-16 rounded bg-zinc-800"></div>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
