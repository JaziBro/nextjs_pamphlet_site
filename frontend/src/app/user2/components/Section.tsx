"use client"

import { useEffect, useState } from "react"

async function getComponentData() {
  const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[component_1][populate]=*");
  const data = await res.json();
  return data.data?.[0]; // no attributes, so this is fine
}

export default async function ReversedStepsSection() {
  const data = await getComponentData();
  console.log("Component data:", data);
  const component_1 = data.component_1[0];
  const image = component_1.image[0];  

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Steps content */}
          <div className="flex flex-col">
            {/* Title */}
            <div className="text-white text-xl font-bold mb-4">{data.title}</div>

            {/* Feature steps */}
            <div className="space-y-4 text-white">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">1</div>
                <div>{data.feature_1}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">2</div>
                <div>{data.feature_2}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">3</div>
                <div>{data.feature_3}</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">4</div>
                <div>{data.feature_4}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-white text-black px-4 py-2 rounded">{data.button_1}</button>
              <button className="bg-zinc-700 text-white px-4 py-2 rounded">{data.button_2}</button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="h-80 w-full overflow-hidden rounded-md bg-zinc-800 md:h-96 flex items-center justify-center">
              <img
                src={image.url}
                alt="Component visual"
                className="h-full w-full object-cover rounded-md"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
