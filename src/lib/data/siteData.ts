import type { TSiteData, TtwitterMetaData, TMetadataIcons } from '@/types'
import { tourData } from './tourData'

// edit the webmanifest file in /public to change the name, short_name, and icons in android
// in webmanifest, theme_color is the color of the app icon's background and
export const siteData: TSiteData = {
  favicon: "/favicon.svg", // .svg / .ico / .png
  name: tourData.name,
  shortName: tourData.shortName,
  publisher: "zeneticesports.com",
  baseUrl: "robimm26.vercel.app",
  description:
    `A tournament hosted by Robi & Zenetic Esports. Featuring a total prize pool of ${tourData.prizePool}, the tournament will be broadcast in Bengali for 4 hours daily, bringing intense rivalries to life.`,
  ogImage: { src: '/ogImage.png', alt: 'Bunext', width: 1200, height: 630 },
  metadata_color: {
    light: '#ED1C24',
    dark: '#ED1C24',
  },
  author: {
    name: 'ardastroid',
    url: 'https://ardastroid.com/',
  },
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Bun',
    'Shadcn UI',
    'TypeScript',
    'Zod',
    'React Hook Form',
    'React Email',
    'Resend',
    'React Hot To	ast',
  ],

  robotsDefault: 'index, follow', // { index: false, follow: false }
}

export const twitterMetaData: TtwitterMetaData = {
  card: 'summary_large_image',
  title: siteData.name,
  description: siteData.description,
  images: siteData.ogImage.src,
  creator: '@darkidop', //twitter username of author
}

// By default, it uses the favicon mentioned at the top
export const icons: TMetadataIcons = {
  icon: siteData.favicon, // "/favicon.svg",
  shortcut: siteData.favicon, // "/favicon-16x16.png",
  apple: siteData.favicon, // "/apple-touch-icon.png",
}
