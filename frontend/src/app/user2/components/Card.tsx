"use client"

import { useEffect, useState } from "react"

export default function Card() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [data, setData] = useState<any>(null)
  const totalSlides = 5

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[component_2][populate]=image"
        )
        const result = await response.json()
        // console.log("Fetched component_2 data:", result.data[0].component_2[0])

        if (result.data && result.data[0].component_2) {
          setData(result.data[0].component_2[0])
        }
      } catch (error) {
        console.error("Failed to fetch component_2 data:", error)
      }
    }

    fetchData()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const imageUrl = data?.image?.[0]?.url
    ? `https://cms-backend-kjsu.onrender.com${data.image[0].url}`
    : null

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main content/image area */}
        <div className="mx-auto mb-8 h-64 w-full max-w-4xl overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Component 2 Image"
              className="h-full w-full object-cover rounded-md"
            />
          ) : (
            <div className="text-white">No image available</div>
          )}
        </div>

        {/* Text and navigation */}
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="text-white text-xl font-semibold">
            {data?.title || <div className="h-6 w-64 rounded bg-zinc-800"></div>}
          </div>
        </div>
      </div>
    </section>
  )
}
