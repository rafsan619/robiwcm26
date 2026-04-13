import { simpleFooterData } from '@/lib/data/footer-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Icons } from '@/components/utils/icons'
import Link from 'next/link'
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: Icons.facebook,
    className: 'size-10',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: Icons.instagram,
    className: 'size-8',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    icon: Icons.twitter,
    className: 'size-8',
  },
]
export function SimpleFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'border-primary relative overflow-hidden border-t-2 py-6 md:px-8 md:py-0',
        className
      )}
    >
      {/* <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:px-0">
        {simpleFooterData?.texts.map((item, index) => (
          <p
            className="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left"
            key={index}
          >
            {item.pretext}{' '}
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
            .
          </p>
        ))}
      </div> */}
      <div
        className="bg-primary-radial-gradient 0 pointer-events-none absolute -top-[200%] left-1/2 z-10 size-[50vw] -translate-x-1/2 select-none"
        aria-hidden="true"
      />

      <div className="flex items-center justify-center gap-10 py-10">
        <Image src="/tour-logo.png" alt="logo" width={200} height={200} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-250 hover:scale-110"
              >
                <link.icon
                  className={cn('text-primary fill-primary', link.className)}
                />
              </Link>
            ))}
          </div>
          <p className="text-center text-sm leading-snug font-bold text-balance md:text-left">
            COPYRIGHT @ {new Date().getFullYear()} Robi{' '}
            <span className="text-primary font-bold">&</span> Zenetic Esports.{' '}
            <br />
            <a
              href="/tos"
              target="_blank"
              className="hover:text-primary underline transition-all duration-250"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
// &copy;
