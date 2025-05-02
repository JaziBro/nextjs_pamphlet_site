"use client"

import { useEffect, useState } from "react"
import { Users, Scissors, Globe, Headset, ThumbsUp } from "lucide-react"

export default function Services() {
  const [component5, setComponent5] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComponent5 = async () => {
      try {
        const res = await fetch(
          "https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_5][populate]=*"
        )
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`)
        }
        const json = await res.json()
        const comp = json?.data?.[0]?.component_5?.[0]
        setComponent5(comp ?? null)
      } catch (e: any) {
        console.error("Fetch error:", e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchComponent5()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error)   return <div>Error: {error}</div>
  if (!component5) return <div>No data found.</div>

  const { title, feature_1, feature_2, feature_3, feature_4, feature_5 } =
    component5

  const featureList = [
    { icon: <Users    className="h-12 w-12 text-pink-500" />, text: feature_1 },
    { icon: <Scissors className="h-12 w-12 text-pink-500" />, text: feature_2 },
    { icon: <Globe    className="h-12 w-12 text-pink-500" />, text: feature_3 },
    { icon: <Headset  className="h-12 w-12 text-pink-500" />, text: feature_4 },
    { icon: <ThumbsUp className="h-12 w-12 text-pink-500" />, text: feature_5 },
  ]

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {featureList.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10">
                {feat.icon}
              </div>
              {/* Text */}
              <p className="text-white">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
