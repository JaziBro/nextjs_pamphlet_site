import { Button } from "@/components/ui/button"
import Image from "next/image"

async function getUserType1PageData() {
  const res = await fetch("http://localhost:1337/api/user-type-1-pages?populate[hero][populate]=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch:", res.statusText);
    return null;
  }

  const json = await res.json();
  return json.data?.[0]; // First item
}

export default async function Hero() {
  const data = await getUserType1PageData();

  if (!data || !data.hero?.[0]) {
    console.warn("⚠️ Hero data missing:", data);
    return <div className="text-center text-red-500">No hero content found.</div>;
  }

  const hero = data.hero[0];
  const image = hero.hero_image?.[0];

  return (
    <section className="w-full py-16 md:py-24 mt-15">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-400 md:h-80">
            {image && (
              <Image
                src={`http://localhost:1337${image.url}`} // Change the domain to your backend's domain if needed
                alt={image.alternativeText || 'Image'}
                height={500}
                width={700}
              />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-md font-bold text-white text-2xl">
              {hero.hero_title}
              <div className="mt-2 text-lg font-normal text-gray-300">
                {hero.hero_subtitle}
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <Button
                variant="outline"
                className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700"
                size="sm"
              >
                {hero.hero_button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
