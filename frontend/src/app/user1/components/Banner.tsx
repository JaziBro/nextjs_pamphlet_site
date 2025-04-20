import Image from "next/image"

export default function Banner() {
  return (
    <section className="relative w-full bg-zinc-900 py-16">
      {/* Light horizontal strip */}
      <div className="absolute inset-0 flex items-center">
        <div className="h-48 w-full bg-gradient-to-r from-white/80 via-gray-200/90 to-zinc-900"></div>
      </div>

      {/* Content container */}
      <div className="container relative mx-auto flex justify-end px-4">
        {/* Mobile device image - aligned to the right */}
        <div className="relative h-80 w-48 transform">
          <div className="h-full w-full overflow-hidden rounded-3xl items-end">
            <Image
              src="/Mobile.png"
              alt="Mobile device"
              width={200}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
