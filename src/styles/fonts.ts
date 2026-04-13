import localFont from 'next/font/local'

// GFF Latin - Default sans font for the site
const fontSans = localFont({
  src: [
    {
      path: './fonts/GFFLatinW05-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinW05-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

// GFF Latin Condensed - Alternative font variant
const fontCondensed = localFont({
  src: [
    {
      path: './fonts/GFFLatinCdW05-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GFFLatinCdW05-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-condensed',
})

// array of fonts
export const fontList = [fontSans, fontCondensed]
// add font variable names to tailwind.config.ts aswell

// Export class names for root layout
export const fonts = fontList.map((font) => font.variable).join(' ')
