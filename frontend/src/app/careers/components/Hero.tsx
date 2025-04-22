import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-zinc-900 text-white mt-10">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-purple-400 font-medium tracking-wide">WORKING AT LYFT</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building a more connected world, ride by ride.
            </h1>
            <p className="text-gray-300 text-md max-w-md">
              Whether it's an everyday commute or a journey that changes everything, we are driven by our purpose: to
              serve and connect.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-4 rounded-full text-md h-auto">
              Search job openings
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md h-64 md:h-80 lg:h-96 rounded-lg bg-gradient-to-b from-white to-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
