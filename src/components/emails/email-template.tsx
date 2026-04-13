import { Tailwind, pixelBasedPreset, Button } from '@react-email/components'

export default function Email() {
  return (
    <Tailwind
      config={{
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
      }}
    >
      <Button
        href="https://example.com"
        className="bg-primary px-3 py-2 leading-4 font-medium text-white"
      >
        Click me
      </Button>
    </Tailwind>
  )
}
