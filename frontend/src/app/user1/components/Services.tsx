"use client"

import { useEffect, useState } from "react"
import { ImageIcon, UserCheck, User, Monitor, MessageSquare } from "lucide-react"

type Component4Data = {
  feature_1: string
  feature_2: string
  feature_3: string
  feature_4: string
  feature_5: string
}

export default function Services() {
  const [data, setData] = useState<Component4Data | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-1-pages?populate=*")
        const json = await res.json()

        console.log("📦 Full response for debugging:", json)
        const comp4 = json.data?.[0]?.component_4?.[0] // ✅ This is correct
        console.log("✅ component_4 fetched:", comp4)

        setData(comp4)
      } catch (err) {
        console.error("❌ Error fetching component_4:", err)
      }
    }

    fetchData()
  }, [])

  if (!data) {
    return <div className="text-center text-red-500">Loading services...</div>
  }

  const features = [
    {
      icon: <ImageIcon className="h-6 w-6 text-white" />,
      title: data.feature_1,
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: data.feature_2,
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: data.feature_3,
    },
    {
      icon: <Monitor className="h-6 w-6 text-white" />,
      title: data.feature_4,
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: data.feature_5,
    },
  ]

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                {feature.icon}
              </div>

              {/* Title */}
              <div className="mb-4 text-white font-medium text-lg">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
