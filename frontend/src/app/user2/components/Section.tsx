"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReversedStepsSection() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/user-type-2-pages?populate[component_1][populate]=image")
        const result = await response.json()
        console.log("Fetched component_4 data:", result.data[0].component_1[0])

        if (result.data && result.data[0].component_1) {
          setData(result.data[0].component_1[0])
        }
      } catch (error) {
        console.error("Failed to fetch component_4 data:", error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  const imageUrl = data.image?.[0]?.url
    ? `http://localhost:1337${data.image[0].url}`
    : null

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Steps content */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="text-white text-xl font-bold mb-4">{data.title}</div>

            {/* Feature steps */}
            <div className="space-y-4 text-white">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">1</div>
                <div>{data.feature_1}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">2</div>
                <div>{data.feature_2}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">3</div>
                <div>{data.feature_3}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">4</div>
                <div>{data.feature_4}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-white text-black px-4 py-2 rounded">{data.button_1}</button>
              <button className="bg-zinc-700 text-white px-4 py-2 rounded">{data.button_2}</button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="h-80 w-full overflow-hidden rounded-md bg-zinc-800 md:h-96 flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Component visual"
                className="h-full w-full object-cover rounded-md"
              />
            ) : (
              <div className="text-white">No image available</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
