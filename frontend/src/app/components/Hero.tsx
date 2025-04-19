import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-16 md:py-24 mt-15">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left gradient box */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-400 md:h-80"></div>

          {/* Right content area */}
          <div className="flex flex-col">
            <div className="h-48 w-full rounded-md bg-zinc-700 md:h-64"></div>

            {/* Control buttons */}
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700" size="sm">
                Previous
              </Button>
              <Button variant="outline" className="rounded-md bg-zinc-700 text-white hover:bg-zinc-600" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
