"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Component7Image = {
  url: string
}

type Component7Data = {
  title: string
  subtitle: string
  button: string
  image: Component7Image[]
}

export default function LastSection() {
  const [component7, setComponent7] = useState<Component7Data | null>(null)

  useEffect(() => {
    async function fetchComponent7() {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_7][populate]=*")
        const json = await res.json()

        const componentData = json.data?.[0]?.component_7?.[0]
        setComponent7(componentData)
        // console.log("Fetched component_7 data:", componentData)
      } catch (error) {
        console.error("Error fetching component_7:", error)
      }
    }

    fetchComponent7()
  }, [])

  if (!component7) {
    return null // or loading skeleton
  }

  const imageUrl = component7.image?.[0]?.url
    ? component7.image[0].url
    : null

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Small heading/label */}
            <div className="h-4 w-24 rounded bg-zinc-800"></div>

            {/* Main heading */}
            <h2 className="text-3xl font-bold text-white">
              {component7.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300">{component7.subtitle}</p>

            {/* CTA Button */}
            <div className="flex items-center">
              <Button className="flex items-center gap-2 bg-zinc-800 text-white hover:bg-zinc-700">
                <span>{component7.button}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Gradient image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80 relative">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Component 7 image"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
