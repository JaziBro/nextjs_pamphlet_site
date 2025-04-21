import { ImageIcon, UserCheck, User, Monitor, MessageSquare } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <ImageIcon className="h-6 w-6 text-white" />,
      title: "Media Services",
      height: "h-40", // Shorter box
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "User Engagement",
      height: "h-64", // Taller box
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "User Experience",
      height: "h-64", // Taller box
    },
    {
      icon: <Monitor className="h-6 w-6 text-white" />,
      title: "Device Compatibility",
      height: "h-48", // Medium box
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Communication",
      height: "h-72", // Tallest box
    },
  ]

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-4 h-5 w-full max-w-[120px] rounded bg-zinc-800"></div>

              {/* Content box */}
              <div className={`w-full rounded-md bg-zinc-800 ${service.height}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
