'use client'

import { cn } from '@/lib/utils'
import { DivisionSelect } from '@/components/DivisionSelect'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ProcessingButton } from '@/components/utils/ProcessingButton'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

type TLeaderForm = {
  className?: string
}

// Define the form schema with Zod validation
const formSchema = z.object({
  region: z.string().min(1, {
    message: 'Please select a region.',
  }),
  teamName: z.string().min(2, {
    message: 'Team name must be at least 2 characters.',
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  number: z
    .string()
    .regex(
      /^(\+8801|8801|01)[0-9]{9}$/,
      'Must be a valid Bangladeshi phone number'
    ),
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address.'),
  freeFireId: z.string().min(6, {
    message: 'Free Fire ID must be at least 6 characters.',
  }),
})

type FormValues = z.infer<typeof formSchema>

export function LeaderForm({ className }: TLeaderForm) {
  const [region, setRegion] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // React Hook Form setup with Zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      region: '',
      teamName: '',
      name: '',
      number: '',
      email: '',
      freeFireId: '',
    },
  })

  // Handle form submission
  const handleSubmit = (values: FormValues) => {
    setIsSubmitting(true)

    // Build query string from form values
    const params = new URLSearchParams({
      region: values.region,
      teamName: values.teamName,
      leaderName: values.name,
      leaderNumber: values.number,
      leaderEmail: values.email,
      leaderFreeFireId: values.freeFireId,
    })

    // Redirect to register page with query params
    router.push(`/register?${params.toString()}`)
  }

  // Handle form errors
  const handleError = () => {
    setIsSubmitting(false)
    const regionError = form.formState.errors.region
    if (regionError) {
      toast({
        title: 'Region Required',
        description:
          regionError.message || 'Please select a region before submitting.',
        variant: 'destructive',
      })
    }
  }

  return (
    <section className={cn('flex flex-col gap-8', className)}>
      <div className="flex items-end justify-between gap-6">
        <h1 className="mb-2 text-4xl leading-none font-extrabold tracking-wide uppercase md:text-5xl">
          The battle lines <br />
          <span className="text-primary">have been drawn.</span>
        </h1>
        {region && (
          <h2 className="text-primary mb-2 text-3xl font-bold uppercase">
            <span className="text-foreground/55">SELECTED:</span> {region}
          </h2>
        )}
      </div>

      {/* Region Selection */}
      <Controller
        control={form.control}
        name="region"
        render={({ field, fieldState }) => (
          <Field data-invalid={!!fieldState.error && !!field.value}>
            <DivisionSelect
              className="mb-5"
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value)
                setRegion(value)
              }}
            />
            {fieldState.error && field.value && (
              <FieldDescription className="text-destructive text-center">
                {fieldState.error.message}
              </FieldDescription>
            )}
          </Field>
        )}
      />

      <div className="bg-card border-primary relative flex flex-col gap-4 border-t-3 p-4 px-6">
        <p className="text-foreground/80 -ml-1">
          *one email, number can only be used once
        </p>

        <div className="mb-2">
          <h2 className="text-primary text-3xl font-bold uppercase">
            Leader Details
          </h2>
          <h3 className="font-medium opacity-90">
            (you&apos;ll be prompted to enter your team details in the next
            step)
          </h3>
        </div>

        <form
          onSubmit={form.handleSubmit(handleSubmit, handleError)}
          className="space-y-6"
        >
          {/* Input fields in horizontal layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Team Name Field */}
            <Controller
              control={form.control}
              name="teamName"
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={!!fieldState.error && !!field.value}
                  className="col-span-2"
                >
                  <FieldLabel htmlFor="team-name">Team Name</FieldLabel>
                  <Input
                    id="team-name"
                    placeholder="Enter your team name"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  {fieldState.error && field.value && (
                    <FieldDescription className="text-destructive">
                      {fieldState.error.message}
                    </FieldDescription>
                  )}
                </Field>
              )}
            />
            {/* Name Field */}
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="leader-name">Leader Name</FieldLabel>
                  <Input
                    id="leader-name"
                    placeholder="Leader name"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  {fieldState.error && field.value && (
                    <FieldDescription className="text-destructive">
                      {fieldState.error.message}
                    </FieldDescription>
                  )}
                </Field>
              )}
            />

            {/* Number Field */}
            <Controller
              control={form.control}
              name="number"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="leader-number">Leader Number</FieldLabel>
                  <Input
                    id="leader-number"
                    type="tel"
                    placeholder="Leader mobile number"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  {fieldState.error && field.value && (
                    <FieldDescription className="text-destructive">
                      {fieldState.error.message}
                    </FieldDescription>
                  )}
                </Field>
              )}
            />

            {/* Email Field */}
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="leader-email">Leader Email</FieldLabel>
                  <Input
                    id="leader-email"
                    type="email"
                    placeholder="Leader email address"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  {fieldState.error && field.value && (
                    <FieldDescription className="text-destructive">
                      {fieldState.error.message}
                    </FieldDescription>
                  )}
                </Field>
              )}
            />
            {/* Free Fire ID Field */}
            <Controller
              control={form.control}
              name="freeFireId"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="free-fire-id">
                    Leader Free Fire ID
                  </FieldLabel>
                  <Input
                    id="free-fire-id"
                    placeholder="Enter leader Free Fire ID"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  {fieldState.error && field.value && (
                    <FieldDescription className="text-destructive">
                      {fieldState.error.message}
                    </FieldDescription>
                  )}
                </Field>
              )}
            />
          </div>

          {/* Submit button */}
          {/* 
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 absolute right-8 -bottom-[8%]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              'Go to next step'
            )}
          </Button> */}
          <ProcessingButton
            type="submit"
            processing={isSubmitting}
            className="bg-primary hover:bg-primary/90 absolute right-8 -bottom-[8%]"
          >
            Go to next stepp
          </ProcessingButton>
        </form>
      </div>
    </section>
  )
}
