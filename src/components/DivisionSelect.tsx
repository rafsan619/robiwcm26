'use client'
import { cn } from '@/lib/utils'
import { DivisonButton } from '@/components/DivisonButton'
import { RadioGroup } from '@/components/ui/radio-group'
import { forwardRef } from 'react'

type TDivisionSelect = {
  className?: string
  value?: string
  onValueChange?: (value: string) => void
}

const divisions = [
  'rangpur',
  'rajshahi',
  'mymensingh',
  'sylhet',
  'dhaka',
  'khulna',
  'barisal',
  'chittagong',
]

export const DivisionSelect = forwardRef<HTMLDivElement, TDivisionSelect>(
  ({ className, value, onValueChange }, ref) => {
    return (
      <RadioGroup
        ref={ref}
        value={value}
        onValueChange={onValueChange}
        className={cn(
          'grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-5 lg:gap-14',
          className
        )}
      >
        {divisions.map((division) => (
          <DivisonButton key={division} division={division} value={division} />
        ))}
      </RadioGroup>
    )
  }
)

DivisionSelect.displayName = 'DivisionSelect'
