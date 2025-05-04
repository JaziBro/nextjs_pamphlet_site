"use client"

import { useEffect, useState } from "react"

export default function Card() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[component_3][populate]=image"
        )
        const result = await res.json()
        // console.log("Fetched component_3 data:", result.data[0].component_3[0])
        if (result.data && result.data[0].component_3) {
          setData(result.data[0].component_3[0])
        }
      } catch (err) {
        console.error("Error fetching component_3 data:", err)
      }
    }

    fetchData()
  }, [])

  const imageUrl = data?.image?.[0]?.url
    ? `https://cms-backend-kjsu.onrender.com${data.image[0].url}`
    : null

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex gap-12 items-center">
        {/* Gradient Box with Image */}
        <div className="w-96 h-96 rounded-lg bg-gradient-to-b from-[#f2f2f2] to-zinc-900 shadow-lg overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Component 3"
              className="object-cover w-full h-full"
            />
          ) : null}
        </div>

        {/* Title & Subtitles */}
        <div className="flex flex-col gap-4 text-white">
          {data?.title ? (
            <div className="text-2xl font-bold">{data.title}</div>
          ) : (
            <div className="w-64 bg-zinc-800 h-8 rounded-md" />
          )}
          {data?.subtitle ? (
            <div className="text-xl">{data.subtitle}</div>
          ) : (
            <div className="w-80 bg-zinc-800 h-8 rounded-md" />
          )}
        </div>
      </div>
    </div>
  )
}
