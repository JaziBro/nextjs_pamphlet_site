"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Component2Data = {
  title?: string
  feature_1: string
  feature_2: string
  feature_3: string
  feature_4: string
  image: { url: string; alternativeText?: string }[]
}

export default function Section() {
  const [currentPage, setCurrentPage] = useState(0)
  const [data, setData] = useState<Component2Data | null>(null)

  const nextPage = () => {
    setCurrentPage((prev) => (prev === stepGroups.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-1-pages?populate[component_2][populate]=*")
        const json = await res.json()
        const comp2 = json.data?.[0]?.component_2?.[0]
        setData(comp2)
        // console.log("✅ Fetched component_2:", comp2)
      } catch (err) {
        console.error("❌ Failed to fetch component_2:", err)
      }
    }

    fetchData()
  }, [])

  const stepGroups = data
    ? [
        [
          { number: 1, text: data.feature_1 },
          { number: 2, text: data.feature_2 },
          { number: 3, text: data.feature_3 },
          { number: 4, text: data.feature_4 },
        ],
      ]
    : []

  if (!data || !data.image?.[0]) {
    return <div className="text-center text-red-500">No component_2 content found.</div>
  }

  const image = data.image[0]
  const imageUrl = new URL(image.url, "https://cms-backend-kjsu.onrender.com").href

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Image from API */}
          <div className="relative h-80 w-full overflow-hidden rounded-md md:h-96">
            <Image
              src={imageUrl}
              alt={image.alternativeText || "Feature image"}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Right side - Steps or FAQ content */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl font-bold text-white">{data.title || "Our Features"}</h2>

            <div className="rounded-lg bg-zinc-800/50 p-6">
              <div className="mb-6 space-y-6">
                {stepGroups[currentPage].map((step) => (
                  <div key={step.number} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">
                      {step.number}
                    </div>
                    <p className="text-sm text-white">{step.text}</p>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  {stepGroups.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-8 rounded-full ${index === currentPage ? "bg-gray-400" : "bg-zinc-700"}`}
                    ></div>
                  ))}
                </div>
                <Button
                  onClick={nextPage}
                  size="icon"
                  className="h-8 w-8 rounded-full bg-zinc-700 text-white hover:bg-zinc-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
