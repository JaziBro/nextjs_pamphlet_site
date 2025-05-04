// src/app/components/ContactSection.tsx
import { PersonStanding, Infinity, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HiCash } from "react-icons/hi"
import { HiOutlineUsers } from "react-icons/hi2"
import Image from "next/image"

async function getComponent3Data() {
  const res = await fetch(
    "https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_3][populate]=*",
    { cache: "no-store" }
  )
  if (!res.ok) throw new Error(`Failed to fetch Component 3 (${res.status})`)
  const json = await res.json()
  return json.data?.[0]?.component_3?.[0] || null
}

export default async function ContactSection() {
  const component3 = await getComponent3Data()

  if (!component3) {
    return (
      <section className="py-16 bg-zinc-900 text-center text-white">
        <p>No component 3 data found.</p>
      </section>
    )
  }

  const image = component3.image?.[0]

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Side: Title, Features & Button */}
          <div className="space-y-8 text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{component3.title}</h2>
              {component3.subtitle && (
                <p className="text-zinc-400">{component3.subtitle}</p>
              )}
            </div>

            {/* Features list */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PersonStanding className="h-5 w-5 text-gray-400" />
                <span>{component3.feature_1}</span>
              </div>
              <div className="flex items-center gap-3">
                <HiCash className="h-5 w-5 text-gray-400" />
                <span>{component3.feature_2}</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineUsers className="h-5 w-5 text-gray-400" />
                <span>{component3.feature_3}</span>
              </div>
              <div className="flex items-center gap-3">
                <Infinity className="h-5 w-5 text-gray-400" />
                <span>{component3.feature_4}</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center space-x-4">
              <Button
                type="button"
                className="flex h-10 w-32 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <span className="text-xs">{component3.button_1}</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            {image ? (
              <Image
                src={`https://cms-backend-kjsu.onrender.com${image.url}`}
                alt={image.alternativeText || "Feature visual"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-700 text-white">
                No image provided
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
