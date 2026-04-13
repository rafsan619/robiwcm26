import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export type gameSlots = {
  slots: number
  maxSlots: number
}
export type GameCardProps = {
  logo: string
  name: string
  image: string
  charecterName: string
  className?: string
  logoClassName?: string
  link?: string
  gameSlotCount?: gameSlots
  showSlots?: boolean
  text?: string
}
export default function GameCard({
  logo,
  name,
  image,
  className,
  logoClassName,
  charecterName = '',
  link,
  gameSlotCount,
  showSlots = false,
  text,
}: GameCardProps) {
  // const { slots, maxSlots } = gameSlotCount || {}

  return (
    <div className="flex h-full max-w-[295px] flex-col items-center justify-center gap-2">
      <div
        className={cn(
          'flex grow flex-col items-center justify-center',
          className
        )}
      >
        <Image src={image} alt={charecterName} width={295} height={295} />
        <Image
          src={logo}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className={cn(
            '-mt-4 w-full min-w-[100px] object-contain px-4 pb-4',
            logoClassName
          )}
          placeholder="blur"
          blurDataURL={
            'data:image/webp;base64,UklGRqYEAABXRUJQVlA4WAoAAAAgAAAANQMAIAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgguAIAAHBCAJ0BKjYDIQE/cbjZZbSuq6cgCAKQLglpbuF1mfXQwABPYB77ZOQ99snIe+3MwEpdrxcnIe+2TkPfntRjXoLsNHIrJ4lxys1AVxjZxIh8Fp7N+zOTtz+6T9JJ10pA97kiYu+6T90oFt3LxqO5Ua6Ae/s5nDfvuq17OIcmz33Sfuk/dJ+6QJDq1869i0Pcwepw+zptp4b866UghCcUE4qgjhgzfszk7c/uk/SSddKQPe5ImLvuk/dJ+6iJAkOrXzr2LQ9zB6nD7OZxPC1WZE/dJ+6T91ESBIdWvnXsWh7mD1OH2czieFg3vuk/dJ+6UAWI2MhvI7ZnKcUE4b990n7pAkPnXSkEITignKm+h+iXQijtnuYPcV/ZzOKB6De+6T90n7pP3SeG/IbeoetHD7OZqC77pP3JX6yyiczignFBOJ4WC3agHuy++6T9JJ10pA97n9d90n7pP3SfukCQ6tfOvYtD3MHqcPs5nE8LBvfdJ+6T90pby8ajuVGugHv7OZw377pP3SBIfOulKX5nFBRfx9D9EuhFHbPcwe4r+zmcUD0G990n7pP3SgCxb38u0wId/ljLKJuLBvfdJ4b866UgfZzOKEa0c4nfIm09D3F33SBIfOulHgoJxQTignFBOVOI4YM37M5O3P7pP0knXSkD3uf133Sfuk/dKW8vGo7lRroB7+zmcN++6T90gSHzrpSB9nM4qgmCw9PIAAD+/VCDGgNXgavapKQ63n0PF1jcpQWw9Izix3jKHrPua2eFQq1JfMFg5hJfMKHEtjgS49lai53t4o4yORjesINSGNnv9JYvcOcu2h+dQBa7/fgQBewi1jQpiUwBA4H8ci0ou4ZxdwgAAJJfwF54sDexPIRuU/Fgp4UBAAA6oWVDFrx/VXyQjdkli3BQEla4cAAMKGLXgUNGEAAAAA=='
          }
        />
      </div>
      {link && (
        <Button
          href={link}
          className="bg-primary/40 hover:bg-primary/90 -ml-1 w-full -skew-x-5 py-6 text-xl transition-all duration-300"
        >
          Register Now
        </Button>
      )}

      {/* <div className="text-primary flex items-center justify-center gap-[0.25em] text-center text-sm font-medium max-[350px]:flex-wrap">
        {showSlots ? (
          <>
            <p>Registration count:</p>{' '}
            {gameSlotCount ? (
              <p>
                <span className="text-foreground">
                  {gameSlotCount.slots ?? 0}
                </span>
                /{gameSlotCount?.maxSlots ?? 0}
              </p>
            ) : (
              <div className="border-primary size-3 animate-spin rounded-full border-2 border-t-transparent" />
            )}
          </>
        ) : (
          <p className="uppercase">{text}</p>
        )}
      </div> */}
    </div>
  )
}
