'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function VideoPlayer({ className }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)

  const handlePlayPause = () => {
    setShowOverlay(false)
    setIsPlaying(true)
  }

  return (
    <section
      className={cn(
        'bg-background flex items-center justify-center px-4 pb-36',
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="border-primary bg-primary group relative w-full max-w-4xl skew-y-1 border-4 sm:border-8">
              <div className="relative aspect-video w-full -skew-y-1">
                <iframe
                  src={`https://www.youtube.com/embed/PNgKSg4-6pw?si=IDNleuucdhBuwZuv${
                    isPlaying ? '&autoplay=1&volume=20' : ''
                  }&rel=0`}
                  className="absolute h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ display: isPlaying ? 'block' : 'none' }}
                />
                {!isPlaying && (
                  <div className="absolute inset-0">
                    <Image
                      src="/vid-thumbnail.png"
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <Image
                src="/game-chr-1.png"
                alt="pubg female"
                width={291}
                height={397.91}
                className="pointer-events-none absolute bottom-[-20%] left-[-18%] z-10 w-[30%] skew-y-3 select-none md:bottom-[-20%] md:left-[-20%] md:w-auto"
              />
              <Image
                src="/game-chr-2.png"
                alt="pubg female"
                width={291}
                height={397.91}
                className="pointer-events-none absolute right-[-8%] bottom-[-20%] z-10 w-[30%] skew-y-3 select-none md:right-[-13%] md:bottom-[-15%] md:w-auto"
              />
              {showOverlay && (
                <div
                  className="absolute inset-0 flex -skew-y-1 cursor-pointer items-center justify-center bg-black/25"
                  onClick={handlePlayPause}
                >
                  <div className="group relative z-20">
                    <Button
                      variant="default"
                      className="rounded-full transition-transform hover:scale-105"
                    >
                      <Play className="size-20" fill="white" />
                    </Button>
                    <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                      Warning: Contains loud sounds
                    </p>
                  </div>
                </div>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-primary text-background font-bold">
            <p>Trailer</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  )
}
