import Link from "next/link"
import { Globe, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-zinc-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* DRIVER Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DRIVER</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  New Driver Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Earnings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Application Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Express Drive
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Bonus
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lyft Rewards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Go Electric
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Black Car Fleets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Driver Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Beta Program
                </Link>
              </li>
            </ul>
          </div>

          {/* RIDER Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">RIDER</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Sign up to ride
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lyft Pink
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Business Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Airports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lyft Family
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Shuttles & Buses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* LYFT Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">LYFT</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lyft Up
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Bikes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Scooters
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Autonomous
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Lyft Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Venue Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* App Links Column */}
          <div className="space-y-4">
            <Link
              href="#"
              className="inline-block rounded-full bg-zinc-800 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Lyft driver app
            </Link>
            <Link
              href="#"
              className="inline-block rounded-full bg-zinc-800 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Lyft rider app
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-start">
            <button className="flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>
          </div>
        </div>

        {/* Bottom legal section */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Accessibility Statement
              </Link>
              <Link href="#" className="hover:text-white">
                Your Privacy Choices
              </Link>
              <span>© {currentYear} Lyft, Inc.</span>
              <span>CPUC ID No. TCP00325513-P</span>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
