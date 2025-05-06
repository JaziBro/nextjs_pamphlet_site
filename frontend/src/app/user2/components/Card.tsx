"use client"

import { useEffect, useState } from "react"

async function getComponentData() {
  const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[component_2][populate]=*");
  const data = await res.json();
  return data.data?.[0]; // no attributes, so this is fine
}

export default async function Card() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const data = await getComponentData()
  console.log("Component data:", data)
  const component_2 = data.component_2[0]
  const image = component_2.image[0]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }


  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main content/image area */}
        <div className="mx-auto mb-8 h-64 w-full max-w-4xl overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80 flex items-center justify-center">
            <img
              src={image.url}
              alt="Component 2 Image"
              className="h-full w-full object-cover rounded-md"
            />
        </div>

        {/* Text and navigation */}
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="text-white text-xl font-semibold">
            {component_2.title || <div className="h-6 w-64 rounded bg-zinc-800"></div>}
          </div>
        </div>
      </div>
    </section>
  )
}
