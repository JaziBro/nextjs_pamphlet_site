import Link from "next/link"

export default function Features() {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            We envision a world where cities feel small again. Where transportation and tech bring people together,
            instead of apart. We see the future as community-driven — and it starts with you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Feature 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Life at Lyft</h2>
            <p className="text-gray-300 text-base">
              Lyft culture revolves around our core values. We have superb benefits and great perks (and some pretty
              cute office dogs). Across our over 45 locations, we&apos;ve got fabulous programs to connect, grow, and
              celebrate.
            </p>
            <Link href="#" className="text-purple-400 hover:text-purple-300 inline-block font-medium">
              Learn more
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Early Talent Programs</h2>
            <p className="text-gray-300 text-base">
              Working at Lyft as an intern, new graduate, or apprentice is a great start to your career. With plenty of
              mentor support, you&apos;ll make an impact with valuable projects. Plus, you&apos;ll love how friendly and welcoming
              Lyft culture is.
            </p>
            <Link href="#" className="text-purple-400 hover:text-purple-300 inline-block font-medium">
              Learn more
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Belonging at Lyft</h2>
            <p className="text-gray-300 text-base">
              Community is at the center of who we are. To offer everyone the best ride, we start by fostering a strong
              sense of belonging within our team —creating an environment where everyone feels valued, supported, and
              connected.
            </p>
            <Link href="#" className="text-purple-400 hover:text-purple-300 inline-block font-medium">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
