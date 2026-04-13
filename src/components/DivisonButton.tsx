'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { RadioGroupItem } from '@/components/ui/radio-group'

type TDivisonButton = {
  className?: string
  division: string
  value: string
}

export function DivisonButton({ className, division, value }: TDivisonButton) {
  return (
    <label
      htmlFor={`division-${value}`}
      className={cn(
        'group has-[[data-state=checked]]:border-primary relative cursor-pointer overflow-hidden border-2 transition-colors duration-150 hover:border-white/25 has-[[data-state=checked]]:duration-0',
        className
      )}
    >
      <RadioGroupItem
        id={`division-${value}`}
        value={value}
        className="sr-only"
      />
      <Image
        src={`/regions/${division}.png`}
        alt={division}
        width={100}
        height={100}
        className="w-full object-cover transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60" />
      <h4
        className={cn(
          'group-has-[[data-state=checked]]:bg-primary/25 absolute inset-0 flex items-center justify-center text-center text-lg font-bold text-white/85 uppercase transition-all duration-300 group-hover:text-white'
        )}
      >
        {division}
      </h4>
    </label>
  )
}
