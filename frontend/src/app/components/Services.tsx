import { Users, Scissors, Globe, Headset, ThumbsUp } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-pink-500" />,
      title: "User Friendly",
      description: "Easy to use interface for all users.",
    },
    {
      icon: <Scissors className="h-12 w-12 text-pink-500" />,
      title: "Customizable",
      description: "Tailor to your specific needs.",
    },
    {
      icon: <Globe className="h-12 w-12 text-pink-500" />,
      title: "Global Access",
      description: "Available worldwide with full support.",
    },
    {
      icon: <Headset className="h-12 w-12 text-pink-500" />,
      title: "24/7 Support",
      description: "Help available whenever you need it.",
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-pink-500" />,
      title: "High Quality",
      description: "Premium quality guaranteed.",
    },
  ]

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mx-auto h-6 w-64 rounded bg-zinc-800"></div>
          <div className="mx-auto mt-3 h-4 w-full max-w-lg rounded bg-zinc-800"></div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Service title */}
              <div className="mb-4 h-4 w-24 rounded bg-zinc-800"></div>

              {/* Service icon */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pink-500/10">
                {service.icon}
              </div>

              {/* Service description */}
              <div className="space-y-2">
                <div className="mx-auto h-3 w-16 rounded bg-zinc-800"></div>
                <div className="mx-auto h-3 w-20 rounded bg-zinc-800"></div>
                <div className="mx-auto h-3 w-16 rounded bg-zinc-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
