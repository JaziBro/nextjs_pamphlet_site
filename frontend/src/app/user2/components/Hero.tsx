"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UserType2Data {
  hero_title: string
  hero_subtitle: string
  hero_button: string
  imageUrl?: string
}

export default function FileUploadSection() {
  const [progress, setProgress] = useState(70)
  const [isChecked, setIsChecked] = useState(true)
  const [data, setData] = useState<UserType2Data | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[hero][populate]=hero_image")
        const json = await res.json()

        const hero = json?.data?.[0]?.hero?.[0]
        const imageUrl = hero?.hero_image?.[0]?.url

        if (hero) {
          setData({
            hero_title: hero.hero_title,
            hero_subtitle: hero.hero_subtitle,
            hero_button: hero.hero_button,
            imageUrl: imageUrl ? `https://cms-backend-kjsu.onrender.com${imageUrl}` : undefined,
          })
        }
      } catch (error) {
        console.error("Failed to fetch user-type-2 data:", error)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div className="text-center text-white py-20">Loading...</div>
  }

  return (
    <section className="relative w-full bg-zinc-900 py-16 md:py-24 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Image */}
          <div className="relative">
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt="Hero"
                className="h-64 w-full object-cover rounded-md md:h-80"
              />
            ) : (
              <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80" />
            )}
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col space-y-6">
            {/* Hero content */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-white">{data.hero_title}</h1>
              <p className="text-sm text-zinc-400">{data.hero_subtitle}</p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                {data.hero_button}
              </Button>
            </div>
            {/* Checkbox with label */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setIsChecked(!isChecked)}
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded ${
                  isChecked ? "bg-pink-600" : "bg-zinc-700"
                }`}
              >
                {isChecked && <Check className="h-3 w-3 text-white" />}
              </div>
              <span className="text-sm text-white">I agree to the terms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
