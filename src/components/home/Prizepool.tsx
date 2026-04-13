import { tourData } from '@/lib/data/tourData'
import { cn } from '@/lib/utils'
import React from 'react'

export function Prizepool({ className }: { className?: string }) {
  return (
    <div className={cn('text-center', className)}>
      <h1 className="mb-4 text-4xl font-bold tracking-wide">
        Total prizepool of
      </h1>
      <div className="bg-primary mb-4 w-full py-2">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          {tourData.prizePool}
        </h1>
      </div>
      <h1 className="mb-2 text-3xl font-bold tracking-wide md:text-4xl">
        What are you <span className="text-primary">waiting for</span>?
      </h1>
    </div>
  )
}
