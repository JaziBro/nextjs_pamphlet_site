'use client'

import React, { useState, useEffect } from "react";
import { PersonStanding, Infinity, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HiCash } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";

export default function Features() {
  const [features, setFeatures] = useState<string[]>([]);
  const [buttons, setButtons] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("Features");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const icons = [<PersonStanding />, <Infinity />, <HiCash />, <HiOutlineUsers />]; // Example icons

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await fetch("https://cms-backend-kjsu.onrender.com/api/user-type-1-pages?populate[component_1][populate]=*", {
          cache: "no-store",
        });
  
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
  
        const json = await res.json();
        console.log("Raw response from Strapi:", json);
  
        const component = json?.data?.[0]?.component_1?.[0];
  
        if (component) {
          setTitle(component.title || "Features"); // Set the title from the API response
          setFeatures([
            component.feature_1,
            component.feature_2,
            component.feature_3,
            component.feature_4,
          ]);
          setButtons([component.button_1, component.button_2]);
          
          // Prepend the base URL to the image URL
          const imageUrl = component.image?.[0]?.url;
          if (imageUrl) {
            setImage(`https://cms-backend-kjsu.onrender.com${imageUrl}`); // Or replace localhost with your live URL
          } else {
            setImage(null);
          }
        }
      } catch (e: any) {
        console.error("Error fetching features:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchFeatures();
  }, []);
  
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Contact form and info */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl font-semibold text-white">{title}</h2>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {icons[index] || <PersonStanding />} {/* Use an icon from the array */}
                  <div className="text-gray-300">{feature || "Untitled Feature"}</div>
                </div>
              ))}
            </div>

            {/* Submit button with navigation */}
            <div className="flex items-center space-x-4">
              <Button
                type="submit"
                className="flex h-10 w-32 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <span className="text-xs">{buttons[0] || "Submit"}</span>
              </Button>

              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Gradient area (image display) */}
          <div className="h-96 w-full overflow-hidden bg-gradient-to-b from-white to-zinc-800">
            {image ? (
              <img src={image} alt="Feature" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
