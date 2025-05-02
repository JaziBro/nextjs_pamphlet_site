"use client"

import { useEffect, useState } from "react"
import { Maximize2, Share2, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [component4, setComponent4] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComponent4 = async () => {
      try {
        const res = await fetch(
          "https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_4][populate]=*"
        )
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`)
        }
        const json = await res.json()
        console.log("Full API RESPONSE:", json)
        const comp = json?.data?.[0]?.component_4?.[0]
        setComponent4(comp ?? null)
      } catch (e: any) {
        console.error("Fetch error:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchComponent4()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!component4) return <div>No component 4 data found.</div>

  const image = component4.image?.[0]
  const { title, feature_1, feature_2, feature_3, button_1 } = component4
  const features = [feature_1, feature_2, feature_3]

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1))

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Image */}
          <div className="h-80 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-96">
            {image && (
              <img
                src={`https://cms-backend-kjsu.onrender.com${image.url}`}
                alt={image.alternativeText || "Feature image"}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Right side - Product features */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-white text-3xl">{title}</h2>
            </div>

            {/* Feature box */}
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <div className="space-y-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                        {idx === 0 && <Maximize2 className="h-5 w-5 text-gray-400" />}
                        {idx === 1 && <Share2 className="h-5 w-5 text-gray-400" />}
                        {idx === 2 && <MessageSquare className="h-5 w-5 text-gray-400" />}
                      </div>
                      <span className="text-white">{feat}</span>
                    </div>
                    <div className="ml-11">
                      <p className="mt-2 text-gray-300">{/* optional description */}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end">
              <div className="flex items-center space-x-2">
                <Button
                  onClick={prevSlide}
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={nextSlide}
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            {button_1 && (
              <Button className="mt-4 rounded-full bg-zinc-800 text-white hover:bg-zinc-700">
                {button_1}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
