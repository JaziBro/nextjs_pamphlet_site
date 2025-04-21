// components/GrayCardLayout.tsx
export default function Card() {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="flex gap-12 items-center">
          {/* Gradient Box */}
          <div className="w-96 h-96 rounded-lg bg-gradient-to-b from-[#f2f2f2] to-zinc-900 shadow-lg" />
  
          {/* Gray Bars */}
          <div className="flex flex-col gap-4">
            <div className="w-64 bg-zinc-800 h-8 rounded-md" />
            <div className="w-80 bg-zinc-800 h-8 rounded-md" />
            <div className="w-36 bg-zinc-800 h-6 rounded-md" />
          </div>
        </div>
      </div>
    )
  }
  