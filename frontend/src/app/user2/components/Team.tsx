export default function Team() {
    const team = [
      {
        id: 1,
        name: "Person One",
        role: "Position",
        content: "Testimonial content or description goes here.",
      },
      {
        id: 2,
        name: "Person Two",
        role: "Position",
        content:
          "Slightly longer testimonial content or description for the middle card to demonstrate the height difference.",
      },
      {
        id: 3,
        name: "Person Three",
        role: "Position",
        content: "Testimonial content or description goes here.",
      },
    ]
  
    return (
      <section className="w-full bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {team.map((team, index) => (
              <div key={team.id} className="flex flex-col items-center">
                {/* Avatar circle */}
                <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-b from-white to-gray-400"></div>
  
                {/* Content card */}
                <div className={`w-full rounded-md bg-zinc-800 p-6 ${index === 1 ? "h-64" : "h-48"}`}>
                  {/* Placeholder for content - replace with actual content */}
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 rounded bg-zinc-700"></div>
                    <div className="h-4 w-full rounded bg-zinc-700"></div>
                    <div className="h-4 w-5/6 rounded bg-zinc-700"></div>
                  </div>
                </div>
  
                {/* Name/title area */}
                <div className="mt-4 flex flex-col items-center space-y-2">
                  <div className="h-4 w-24 rounded bg-zinc-800"></div>
                  <div className="h-3 w-36 rounded bg-zinc-800"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  