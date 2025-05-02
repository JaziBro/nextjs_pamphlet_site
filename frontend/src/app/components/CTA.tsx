import Image from "next/image";

async function getHomePageData() {
  const res = await fetch("http://localhost:1337/api/home-pages?populate[component_6][populate]=*");
  const data = await res.json();
  return data.data?.[0];
}

export default async function CTA() {
  const data = await getHomePageData();
  const component = data.component_6?.[0];
  const image = component?.image?.[0];
  
  // If no image exists, fallback to a default image
  const imageUrl = image ? `http://localhost:1337${image.url}` : "/images/default-image.jpg";

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80">
            <Image src={imageUrl} alt="Image for CTA" height={500} width={700} />
          </div>

          {/* Right side - CTA content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Title */}
            <h2 className="text-2xl font-bold text-white">{component?.title}</h2>

            {/* Subtitle */}
            <p className="text-lg font-normal text-gray-300">{component?.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
