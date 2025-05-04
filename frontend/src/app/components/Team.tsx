import Image from "next/image";

async function getHomePageData() {
  const res = await fetch("https://cms-backend-kjsu.onrender.com/api/home-pages?populate[team][populate]=*");
  const data = await res.json();
  return data?.data?.[0]; // Extracting the first home page data
}

export default async function Team() {
  const data = await getHomePageData();
  // console.log("Fetched team data:", data);

  if (!data) {
    return <div>No data available</div>;
  }

  // Accessing the team array and extracting team member data
  const teamData = data?.team?.[0]; // First item in the array
  const team = [
    {
      name: teamData?.team_1_title,
      content: "Testimonial content or description goes here.",
      image: teamData?.team_1_image?.[0]?.url, 
    },
    {
      name: teamData?.team_2_title, 
      content: "Testimonial content or description goes here.",
      image: teamData?.team_2_image?.[0]?.url, 
    },
    {
      name: teamData?.team_3_title,
      content: "Testimonial content or description goes here.",
      image: teamData?.team_3_image?.[0]?.url, 
    },
  ];

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {team.map((teamMember, index) => {
            // console.log(`Rendering team member ${teamMember.name} with image:`, teamMember.image); // Log to verify URL
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Avatar circle */}
                <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-b from-white to-gray-400 relative">
                  {/* Conditionally render image */}
                  {teamMember.image ? (
                    <Image
                      src={`https://cms-backend-kjsu.onrender.com${teamMember.image}`} // Prepending the base URL
                      alt={`${teamMember.name} Avatar`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>

                {/* Content card */}
                <div className={`w-full rounded-md p-6 items-center ${index === 1 ? "h-64" : "h-48"}`}>
                  <div className="space-y-4">
                    <div className="h-4 rounded text-center text-white text-xl">{teamMember.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
