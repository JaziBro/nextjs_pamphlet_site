"use client"


export default function Hero() {
  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Gradient image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80"></div>

          {/* Right side - Media content */}
          <div className="flex flex-col">
            {/* Content area */}
            <div className="h-64 w-full rounded-md bg-zinc-800 md:h-64"></div>

            {/* Navigation controls */}
            <div className="mt-6 flex justify-center">
              <div className="flex h-12 w-32 items-center justify-between rounded-full bg-zinc-800 px-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
