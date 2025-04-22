"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Job data structure
interface Job {
  title: string
  location: string
  city: string
  country: string
}

interface JobCategory {
  name: string
  jobs: Job[]
  isOpen: boolean
}

export default function JobSearch() {
  // Initial job categories data
  const [jobCategories, setJobCategories] = useState<JobCategory[]>([
    {
      name: "Accounting & Finance",
      isOpen: false,
      jobs: [
        { title: "Financial Analyst", location: "San Francisco, CA", city: "San Francisco", country: "USA" },
        { title: "Senior Accountant", location: "Nashville, TN", city: "Nashville", country: "USA" },
      ],
    },
    {
      name: "Administrative",
      isOpen: true,
      jobs: [
        { title: "Executive Business Partner", location: "San Francisco, CA", city: "San Francisco", country: "USA" },
      ],
    },
    {
      name: "Bikes & Scooters",
      isOpen: true,
      jobs: [
        {
          title: "Firmware Quality Assurance Engineer, Lyft Urban Solutions",
          location: "San Francisco, CA",
          city: "San Francisco",
          country: "USA",
        },
        {
          title: "Firmware Technical Program Manager, LUS",
          location: "Montreal, Canada",
          city: "Montreal",
          country: "Canada",
        },
        {
          title: "Gestionnaire de Programme Technique, LUS",
          location: "Montreal, Canada",
          city: "Montreal",
          country: "Canada",
        },
        {
          title: "Ingénieur Plateforme - Informatique, LUS",
          location: "Montreal, Canada",
          city: "Montreal",
          country: "Canada",
        },
      ],
    },
    {
      name: "Business Development",
      isOpen: false,
      jobs: [
        { title: "Business Development Manager", location: "New York, NY", city: "New York", country: "USA" },
        { title: "Strategic Partnerships Lead", location: "San Francisco, CA", city: "San Francisco", country: "USA" },
      ],
    },
    {
      name: "Communications",
      isOpen: false,
      jobs: [
        { title: "Communications Manager", location: "San Francisco, CA", city: "San Francisco", country: "USA" },
        { title: "Public Relations Specialist", location: "Los Angeles, CA", city: "Los Angeles", country: "USA" },
      ],
    },
  ])

  // State for filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  // Toggle category open/close
  const toggleCategory = (index: number) => {
    const updatedCategories = [...jobCategories]
    updatedCategories[index].isOpen = !updatedCategories[index].isOpen
    setJobCategories(updatedCategories)
  }

  // Get unique locations for filter
  const locations = Array.from(new Set(jobCategories.flatMap((category) => category.jobs).map((job) => job.city)))

  // Filter jobs based on search and filters
  const filteredCategories = jobCategories
    .map((category) => {
      // Filter jobs within this category
      const filteredJobs = category.jobs.filter((job) => {
        const matchesSearch =
          searchQuery === "" ||
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory = selectedCategory === "all" || category.name === selectedCategory

        const matchesLocation =
          selectedLocation === "all" || job.city === selectedLocation || job.country === selectedLocation

        return matchesSearch && matchesCategory && matchesLocation
      })

      // Return category with filtered jobs
      return {
        ...category,
        jobs: filteredJobs,
        // Only show categories with matching jobs
        visible: filteredJobs.length > 0,
      }
    })
    .filter((category) => category.visible)

  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-purple-400">Openings</h2>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search jobs..."
              className="pl-10  border-gray-700 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-2">Filter by:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[200px]  border-gray-700 text-white">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent className=" border-gray-700 text-white">
                <SelectItem value="all">All categories</SelectItem>
                {jobCategories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full sm:w-[200px] border-gray-700 text-white">
                <SelectValue placeholder="All locations" />
              </SelectTrigger>
              <SelectContent className=" border-gray-700 text-white">
                <SelectItem value="all">All locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1">
          {filteredCategories.map((category, index) => (
            <div key={category.name} className="border-b border-gray-800">
              <Button
                variant="ghost"
                className="w-full justify-between py-4 text-left hover:bg-zinc-800"
                onClick={() => toggleCategory(index)}
              >
                <span className="text-lg font-medium">{category.name}</span>
                {category.isOpen ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </Button>

              {category.isOpen && category.jobs.length > 0 && (
                <div className="py-2 space-y-4">
                  {category.jobs.map((job) => (
                    <div key={`${job.title}-${job.location}`} className="pl-4 pr-2 py-2 hover:bg-zinc-800 rounded-md">
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-gray-400">{job.location}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-8 text-gray-400">No job openings match your search criteria.</div>
          )}
        </div>
      </div>
    </section>
  )
}
