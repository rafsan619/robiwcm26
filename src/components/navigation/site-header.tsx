import Image from 'next/image'
import Link from 'next/link'

// import { MainNav } from '@/components/navigation/main-nav'
// import { MobileNav } from '@/components/navigation/mobile-nav'
import { Button } from '@/components/ui/button'
import { ShareModal } from '@/components/utils/share-modal'
import { remoteUrl } from '@/lib/config/siteConfig'
import { navData } from '@/lib/data/nav-data'
import { cn, truncateString } from '@/lib/utils'
import { Rocket, Share2 } from 'lucide-react'

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 dark:border-border top-0 z-50 w-full border-b p-2 py-3 backdrop-blur',
        className
      )}
    >
      <div className="from-background absolute top-0 left-0 z-10 h-full w-[50%] bg-gradient-to-r from-55%" />
      <div className="from-background absolute top-0 right-0 z-10 h-full w-[50%] bg-gradient-to-l from-55%" />
      <div
        className="absolute top-0 left-[50%] -z-10 h-full w-[70%] translate-x-[-53%] bg-no-repeat opacity-100"
        style={{
          backgroundImage: 'url(/header-bg.webp)',
          backgroundSize: '70%',
          backgroundPosition: '60% 5%',
          zIndex: 5,
          // filter: 'hue-rotate(210deg)',
        }}
      />
      <div className="relative z-10 flex items-center justify-between px-4">
        <a href="https://www.robi.com.bd/en" target="_blank">
          <Image
            src={'/robi.svg'}
            alt={'Robi'}
            width={160}
            height={35}
            className="max-w-[60px] sm:w-auto sm:max-w-[100px]"
          />
          <span className="sr-only">Free Fire site</span>
        </a>

        <Link href="/" className="mr-6 flex items-center gap-2 md:-mr-2">
          {navData.logo && (
            <Image
              src={navData.logo.src}
              alt={navData.logo.alt}
              width={170}
              height={170}
              className="-mb-[5rem] w-auto max-w-[100px] md:max-w-[170px]"
            />
          )}
          {/* <span
            className={cn(
              'text-2xl font-bold',
              !navData.showTitle && 'sr-only'
            )}
          >
            {truncateString(navData.title, 20)}
          </span> */}
        </Link>
        <ShareModal shareUrl={remoteUrl}>
          <Button size="sm" variant="outline" className="h-10">
            <Share2 className="size-5" />
            <span className="sr-only sm:not-sr-only">Share</span>
          </Button>
        </ShareModal>
      </div>
    </header>
  )
}
