import React from 'react'
import { Spotlight } from '@/components/ui/acernity/Spotlight'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { tourData } from '@/lib/data/tourData'

export function Hero() {
  return (
    <div className="bg-background/[0.96] bg-grid-white/[0.02] relative flex h-[45rem] w-full overflow-hidden rounded-md antialiased sm:h-[35rem] md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#ED1C24"
      />
      <div className="relative z-10 mx-auto mt-10 w-full max-w-5xl p-6 pt-20 text-center md:pt-0">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-primary text-4xl font-semibold tracking-wide">
            {tourData.name}
          </h1>
          <h1 className="text-6xl font-extrabold tracking-wide">
            Unite<span className="text-primary">.</span> Compete
            <span className="text-primary">.</span> Represent
            <span className="text-primary">.</span>
          </h1>
        </div>

        <p className="text-foreground/80 mx-auto mt-5 max-w-[789px]">
          A tournament hosted by Robi & Zenetic Esports. Featuring a total prize
          pool of <span className="font-bold">{tourData.prizePool}</span>, the
          tournament will be broadcast in Bengali for 4 hours daily, bringing
          intense rivalries to life.
        </p>
        <Button className="mt-7 text-xl" asChild>
          <Link href="/#registration">Register Now</Link>
        </Button>
      </div>
    </div>
  )
}
