'use client'

import { useEffect, useState } from 'react'

type TeamMember = {
  id: number
  title: string
  image?: string
}

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([])

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const res = await fetch(
          'https://cms-backend-kjsu.onrender.com/api/user-type-2-pages?populate[team][populate]=*'
        )
        const result = await res.json()
        // console.log('Fetched team raw:', result)

        const teamObj = result.data?.[0]?.team?.[0]

        const teamArray: TeamMember[] = [
          {
            id: 1,
            title: teamObj?.team_1_title || 'Team Member 1',
            image: teamObj?.team_1_image?.url,
          },
          {
            id: 2,
            title: teamObj?.team_2_title || 'Team Member 2',
            image: teamObj?.team_2_image?.url,
          },
          {
            id: 3,
            title: teamObj?.team_3_title || 'Team Member 3',
            image: teamObj?.team_3_image?.url,
          },
        ]

        setTeam(teamArray)
      } catch (err) {
        console.error('Failed to fetch team data:', err)
      }
    }

    fetchTeamData()
  }, [])

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {team.map((member, index) => (
            <div key={member.id} className="flex flex-col items-center">
              {/* Avatar circle with image */}
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-b from-white to-gray-400">
                {member.image ? (
                  <img
                    src={`https://cms-backend-kjsu.onrender.com${member.image}`}
                    alt={member.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-300" />
                )}
              </div>
              {/* Name/title area */}
              <div className="mt-4 flex flex-col items-center space-y-2">
                <div className="text-white text-lg font-semibold">{member.title}</div>
                <div className="text-gray-400 text-sm">Team Member</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
