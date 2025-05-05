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

 async function getHomePageData() {
    const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[hero][populate]=*");
    const data = await res.json();
    return data.data?.[0]; // no attributes, so this is fine
}
export default async function FileUploadSection() {
  const [progress, setProgress] = useState(70)
  const [isChecked, setIsChecked] = useState(true)

  const data = await getHomePageData();
  const hero = data.hero[0];
  const image = hero.hero_image;
 
  if (!data) {
    return <div className="text-center text-white py-20">Loading...</div>
  }

  return (
    <section className="relative w-full bg-zinc-900 py-16 md:py-24 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={image.url}
              alt="Hero"
              className="h-64 w-full object-cover rounded-md md:h-80"
            />              
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col space-y-6">
            {/* Hero content */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-white">{hero.hero_title}</h1>
              <p className="text-sm text-zinc-400">{hero.hero_subtitle}</p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                {hero.hero_button}
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
