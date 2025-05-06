"use client"

import { useEffect, useState } from "react"

async function getComponentData() {
  const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[component_3][populate]=*");
  const data = await res.json();
  return data.data?.[0]; // no attributes, so this is fine
}

export default async function Card() {
  const data = await getComponentData()
  console.log("Component data:", data)
  const component_3 = data.component_3[0]
  const image = component_3.image[0]


  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex gap-12 items-center">
        {/* Gradient Box with Image */}
        <div className="w-96 h-96 rounded-lg bg-gradient-to-b from-[#f2f2f2] to-zinc-900 shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={image.url}
              alt="Component 3"
              className="object-cover w-full h-full"
            />
        </div>

        {/* Title & Subtitles */}
        <div className="flex flex-col gap-4 text-white">
            <div className="text-2xl font-bold">{component_3.title}</div>
            <div className="text-xl">{component_3.subtitle}</div>
        </div>
      </div>
    </div>
  )
}
