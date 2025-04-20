import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LastSection() {
  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Small heading/label */}
            <div className="h-4 w-24 rounded bg-zinc-800"></div>

            {/* Main heading */}
            <div className="h-8 w-full rounded bg-zinc-800"></div>

            {/* Description */}
            <div className="h-24 w-full rounded bg-zinc-800"></div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Button className="flex items-center gap-2 bg-zinc-800 text-white hover:bg-zinc-700">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Gradient image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80"></div>
        </div>
      </div>

      {/* Blue divider line */}
      <div className="mt-16 border-t border-blue-500"></div>
    </section>
  )
}
