import Image from 'next/image'
import { Hero } from '@/components/home/Hero'
import { Prizepool } from '@/components/home/Prizepool'
import { VideoPlayer } from '@/components/home/VideoPlayer'
import { Games } from '@/components/home/Games'
import { LeaderForm } from '@/components/home/LeaderForm'
export default function Home() {
  return (
    <>
      <Hero />
      <VideoPlayer />
      <div className="max-auto my-12 w-full">
        <Image
          src="/takestage.webp"
          alt="Take Stage, Represent your division."
          width={1531.5}
          height={860.5}
          className="w-full object-cover"
        />
      </div>
      <Games className="mx-auto max-w-[1300px] pt-20" />
      {/* <LeaderForm className="container mx-auto" /> */}
      <Prizepool className="my-[10rem] mt-[9rem]" />
      <div className="max-auto w-full">
        <Image
          src="/battleinstyle.webp"
          alt="Battle in Style, Battle of Cities Bangladesh 2025."
          width={1535}
          height={487}
          className="w-full object-cover"
        />
      </div>
    </>
  )
}
