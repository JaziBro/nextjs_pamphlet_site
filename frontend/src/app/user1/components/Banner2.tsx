"use client"

import { useEffect, useState } from "react"

type Component3Data = {
  title: string
  subtitle: string
  feature_1: string
  feature_2: string
}

export default function ToggleSection() {
  const [activeTab, setActiveTab] = useState("first")
  const [data, setData] = useState<Component3Data | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-1-pages?populate[component_3][populate]=*")
        const json = await res.json()

        const comp3 = json.data?.[0]?.component_3?.[0]
        console.log("component_3 is:", comp3)
        if (!comp3) {
          console.warn("component_3 is still MIA 😩")
          console.log("data[0] is:", json.data?.[0])
        } else {
          console.log("🔥 component_3 FOUND 🎉", comp3)
          setData(comp3)
        }
      } catch (err) {
        console.error("❌ Error fetching component_3:", err)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div className="text-center text-red-500">Loading component_3...</div>
  }

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-purple-400">
            {data.subtitle}
          </h3>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            {data.title}
          </h2>
        </div>

        {/* Pill containers */}
        <div className="relative mb-16 h-64">
          {/* First pill - purple */}
          <div
            className={`absolute right-0 top-0 w-3/4 cursor-pointer rounded-full bg-purple-900/30 p-6 transition-all duration-300 md:w-2/3 ${
              activeTab === "first" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActiveTab("first")}
          >
            <div className="h-32 w-full rounded-md bg-purple-900/20 flex items-center justify-center text-center text-white font-medium text-4xl">
              {data.feature_1}
            </div>
          </div>

          {/* Second pill - pink */}
          <div
            className={`absolute bottom-0 left-0 w-3/4 cursor-pointer rounded-full bg-pink-900/30 p-6 transition-all duration-300 md:w-2/3 ${
              activeTab === "second" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActiveTab("second")}
          >
            <div className="h-32 w-full rounded-md bg-pink-900/20 flex items-center justify-center text-center text-white font-medium text-4xl">
              {data.feature_2}
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="space-y-2 text-center">
          <p className="text-white text-lg">
            {activeTab === "first" ? data.feature_1 : data.feature_2}
          </p>
          <p className="text-sm text-zinc-400">Tap the pills to explore more ✨</p>
        </div>
      </div>
    </section>
  )
}
