"use client"

import { useState } from "react"

export default function ToggleSection() {
  const [activeTab, setActiveTab] = useState("first")

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8">
          <div className="h-5 w-32 rounded bg-zinc-800"></div>
          <div className="mt-2 h-10 w-64 rounded bg-zinc-800"></div>
        </div>

        {/* Pill containers */}
        <div className="relative mb-16 h-64">
          {/* First pill - purple */}
          <div
            className={`absolute right-0 top-0 w-3/4 rounded-full bg-purple-900/30 p-6 transition-all duration-300 md:w-2/3 ${
              activeTab === "first" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActiveTab("first")}
          >
            <div className="h-32 w-full rounded-md bg-purple-900/20"></div>
          </div>

          {/* Second pill - pink */}
          <div
            className={`absolute bottom-0 left-0 w-3/4 rounded-full bg-pink-900/30 p-6 transition-all duration-300 md:w-2/3 ${
              activeTab === "second" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setActiveTab("second")}
          >
            <div className="h-32 w-full rounded-md bg-pink-900/20"></div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="space-y-4">
          <div className="h-6 w-full rounded bg-zinc-800"></div>
          <div className="h-4 w-full rounded bg-zinc-800"></div>
        </div>
      </div>
    </section>
  )
}
