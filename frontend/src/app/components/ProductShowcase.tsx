import { Maximize2, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

async function getComponent4Data() {
  const res = await fetch(
    "https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_4][populate]=*",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`Failed to fetch Component 4 (${res.status})`);
  const json = await res.json();
  return json.data?.[0]?.component_4?.[0] || null;
}

export default async function ProductShowcase() {
  const component4 = await getComponent4Data();

  if (!component4) {
    return (
      <section className="py-16 bg-zinc-900 text-center text-white">
        <p>No component 4 data found.</p>
      </section>
    );
  }

  const image = component4.image?.[0];
  const imageUrl = image ? `https://images.unsplash.com/photo-1746264726380-cb3186610ef0?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D` : null; // Fallback to a default image if none is provided
  console.log("Image URL:", imageUrl); // Debug image URL

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Product image"
                height={500}
                width={700}
                objectFit="cover" // Add object fit to control image scaling
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-white">
                No image provided
              </div>
            )}
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-white text-3xl">{component4.title}</h2>
            <div className="space-y-4">
              {component4.feature_1 && (
                <div className="flex items-center gap-3">
                  <Maximize2 className="h-5 w-5 text-gray-400" />
                  <span>{component4.feature_1}</span>
                </div>
              )}
              {component4.feature_2 && (
                <div className="flex items-center gap-3">
                  <Share2 className="h-5 w-5 text-gray-400" />
                  <span>{component4.feature_2}</span>
                </div>
              )}
              {component4.feature_3 && (
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <span>{component4.feature_3}</span>
                </div>
              )}
              {component4.feature_4 && (
                <div className="flex items-center gap-3">
                  <Maximize2 className="h-5 w-5 text-gray-400" />
                  <span>{component4.feature_4}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
