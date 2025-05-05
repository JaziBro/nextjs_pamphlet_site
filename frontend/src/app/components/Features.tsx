import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Home, DollarSign, Clock, Banknote } from "lucide-react";

async function getFeaturesData() {
  const res = await fetch(
    "https://cms-backend-kjsu.onrender.com/api/home-pages?populate[component_1][populate]=*",
    {
      cache: "no-store",
    }
  );  
  const data = await res.json();
  // console.log("Fetched data:", data);
  return data?.data?.[0];
}


export default async function FeaturesSection() {
  const data = await getFeaturesData();
  // console.log("Fetched data for FeaturesSection:", data);

  if (!data) {
    return <div>No data available</div>;
  }

  const component1 = data?.component_1?.[0];
  const image = component1?.image?.[0];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-white">{component1?.title}</h2>

        <div className="flex flex-col gap-4 mb-6 text-left text-gray-300">
          {component1?.feature_1 && (
            <div className="flex items-center space-x-2">
              <Home className="text-xl" />
              <p>{component1.feature_1}</p>
            </div>
          )}
          {component1?.feature_2 && (
            <div className="flex items-center space-x-2">
              <DollarSign className="text-xl" />
              <p>{component1.feature_2}</p>
            </div>
          )}
          {component1?.feature_3 && (
            <div className="flex items-center space-x-2">
              <Clock className="text-xl" />
              <p>{component1.feature_3}</p>
            </div>
          )}
          {component1?.feature_4 && (
            <div className="flex items-center space-x-2">
              <Banknote className="text-xl" />
              <p>{component1.feature_4}</p>
            </div>
          )}
        </div>

        <div className="flex gap-4 mb-6">
          {component1?.button_1 && (
            <Button variant="outline" className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700" size="sm">
              {component1.button_1}
            </Button>
          )}
          {component1?.button_2 && (
            <Button variant="outline" className="rounded-md bg-zinc-800 text-white hover:bg-zinc-700" size="sm">
              {component1.button_2}
            </Button>
          )}
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="relative w-full h-80 rounded-md overflow-hidden">
          {image && (
            <img
              src={image?.url}
              alt="Component Image"
            />
          )}
        </div>
      </div>
    </section>
  );
}
