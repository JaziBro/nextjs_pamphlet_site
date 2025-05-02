import { Button } from "@/components/ui/button"
import Image from "next/image";

async function getHomePageData() {
  const res = await fetch("https://cms-backend-kjsu.onrender.com/api/home-pages?populate[hero][populate]=*");
  const data = await res.json();
  return data.data?.[0];
}

export default async function Hero() {
  const data = await getHomePageData();
  console.log("Fetched data:", data);
  const hero = data.hero?.[0];
  const image = hero?.hero_image?.[0];

  return (
    <section className="w-full py-16 md:py-24 mt-15">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-400 md:h-80">
            <Image src={`https://cms-backend-kjsu.onrender.com${image.url}`} alt="Hero img" height={500} width={700}/>
          </div>

          <div className="flex flex-col">
            <div className="h-48 w-full rounded-md font-bold md:h-64 text-white p-4 text-2xl">
              {hero.hero_title}
              <div className="mt-2 text-lg font-normal text-gray-300">
                {hero.hero_subtitle}
              </div>
              
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700" size="sm">
                {hero.hero_button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
