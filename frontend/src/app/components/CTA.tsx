export default function CTA() {
  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Gradient image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80"></div>

          {/* Right side - CTA content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Heading */}
            <div className="h-6 w-48 rounded bg-zinc-800"></div>

            {/* Subheading */}
            <div className="h-4 w-full rounded bg-zinc-800"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
