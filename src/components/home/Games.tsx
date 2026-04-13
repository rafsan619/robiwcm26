'use client'
import GameCard from '@/components/GameCard'
import { cn } from '@/lib/utils'
import { gamesArray } from '@/lib/data/tourData'

export function Games({ className }: { className?: string }) {
  return (
    <section className={cn('text-center', className)} id="registration">
      <h1 className="mb-10 text-4xl font-extrabold tracking-wide">
        Pick your <span className="text-primary">playing field.</span>
      </h1>
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
        {gamesArray.map((game, index) => (
          <GameCard
            key={index}
            {...game}
            className="from-primary/50 border-primary border-b-8 bg-gradient-to-t"
            logoClassName={game?.logoClassName}
            // gameSlotCount={slots[game.codeName as keyof typeof slots]}
            showSlots={false}
            text={'Registration closed'}
            link={game.regLink}
          />
        ))}
      </div>
    </section>
  )
}
