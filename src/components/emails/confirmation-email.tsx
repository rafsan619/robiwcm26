import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import { absoluteUrl } from '@/lib/utils'
import { tourData } from '@/lib/data/tourData'

const tailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        primary: '#ED1C24',
        background: '#0A0D13',
        foreground: '#FFFFFF',
        card: '#131823',
        accent: '#202939',
      },
    },
  },
}
type TemailDetails = {
  label: string
  value: string
}
interface RegConfirmationEmailProps {
  name?: string
  timestamp?: Date
  emailDetails?: TemailDetails[]
}

export const RegConfirmationEmail = ({
  name,
  timestamp,
  emailDetails,
}: RegConfirmationEmailProps) => {
  const getBaseUrl = (): string => {
    try {
      // Vercel preview deployments
      // if (process.env?.VERCEL_URL) {
      //   return `https://${process.env.VERCEL_URL}`
      // }
      // Manual override via environment variable
      //   if (process.env?.NEXT_PUBLIC_SITE_URL) {
      //     return process.env.NEXT_PUBLIC_SITE_URL
      //   }
      // Local development
      if (process.env?.NODE_ENV === 'development')
        return 'http://localhost:3000'

      return absoluteUrl()
    } catch (error) {
      // Fallback if anything fails
      console.error('Error getting base URL:', error)
      return 'http://localhost:3000'
    }
  }

  const baseUrl = getBaseUrl()
  const formattedDate = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'Asia/Dhaka',
  }).format(timestamp)

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-accent font-sans">
          <Preview>Registration Confirmed for {tourData.name}</Preview>
          <Container className="bg-card text-foreground mx-auto mt-[30px] max-w-[580px]">
            <Section className="p-[10px]">
              <Img
                width={114}
                src={`${baseUrl}/tour-logo.png`}
                alt={tourData.codeName || 'Tour Logo'}
                className="mx-auto"
              />
            </Section>
            <Section className="w-full">
              <Row>
                <Column className="border-accent w-[249px] border-b-2" />
                <Column className="border-primary w-[102px] border-b-2" />
                <Column className="border-accent w-[249px] border-b-2" />
              </Row>
            </Section>
            <Section className="px-10 pt-[5px] pb-[12px]">
              <Text className="text-foreground text-[30px] leading-[30px] font-bold tracking-tight">
                Registration <span className="text-primary">Confirmed</span>
              </Text>

              <Text className="text-[14px] leading-[1.5]">Hi {name},</Text>
              <Text className="text-[14px] leading-[1.5]">
                We&apos;re pleased to inform you that your registration for{' '}
                <span className="text-primary font-bold">{tourData.name}</span>{' '}
                has been confirmed on {formattedDate}.
              </Text>
              {emailDetails && (
                <Section className="my-0 py-0">
                  <Text
                    className={`text-foreground text-lg leading-[10px] font-semibold`}
                  >
                    Registration Details
                  </Text>
                  {emailDetails?.map(({ label, value }, idx) => (
                    <Row key={idx} className="mb-2 w-full" align="center">
                      <Column
                        className={`border-accent w-1/4 rounded-l-md border-t-2 border-b-2 border-l-2 px-6 py-0`}
                      >
                        <Text
                          className={`text-foreground leading-[24px] font-semibold`}
                        >
                          {label}
                        </Text>
                      </Column>
                      <Column
                        className={`bg-accent w-1/2 rounded-r-md px-6 py-0`}
                      >
                        <Text
                          className={`text-foreground leading-[24px] no-underline`}
                        >
                          {value}
                        </Text>
                      </Column>
                    </Row>
                  ))}
                </Section>
              )}

              <Text className="text-foreground text-[14px] leading-[1.5]">
                Have questions? You can directly reach out to us at{' '}
                <Link
                  href="https://zeneticesports.com/dc-support"
                  target="_blank"
                  className="text-primary font-semibold underline underline-offset-2"
                >
                  https://zeneticesports.com/dc-support
                </Link>
              </Text>
              <Text className="text-foreground text-[14px] leading-[1.5]">
                Best regards,
                <br />
                <span className="text-foreground font-semibold">
                  Zenetic Esports
                </span>
              </Text>
            </Section>
          </Container>

          <Section className="mx-auto max-w-[580px]">
            <Row>
              <Text className="text-center text-[12px] text-[#706a7b]">
                Email was sent by{' '}
                <Link
                  href={'https://zeneticesports.com/'}
                  className="text-current underline"
                  target="_blank"
                >
                  Zenetic Esports{' '}
                </Link>
                for {tourData.name}. For any help, mail us at{' '}
                <Link
                  href={`mailto:support@zeneticesports.com`}
                  className={`text-current underline`}
                  target="_blank"
                >
                  support@zeneticesports.com
                </Link>
              </Text>
            </Row>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}

RegConfirmationEmail.PreviewProps = {
  name: 'John Doe',
  timestamp: new Date(),
  emailDetails: [
    {
      label: 'Game',
      value: 'Valorant',
    },
  ],
} as RegConfirmationEmailProps

export default RegConfirmationEmail
