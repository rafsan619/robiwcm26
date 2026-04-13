'use client'

import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { Field, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { ProcessingButton } from '@/components/utils/ProcessingButton'
import { Checkbox } from '@/components/ui/checkbox'
import GameCard from '@/components/GameCard'
import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import {
  registrationSchema,
  type RegistrationFormData,
} from '@/lib/schemas/registration'
import { games } from '@/lib/data/tourData'
import { Spotlight } from '@/components/ui/acernity/Spotlight'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { RegCompleted } from './RegCompleted'

type TRegistrationForm = {
  className?: string
}

type FormValues = RegistrationFormData
// console.log(absoluteUrl())

export const RegistrationForm = ({ className }: TRegistrationForm) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      number: '',
      email: '',
      pesId: '',
      deviceModel: '',
      discordUsername: '',
      agreeToTerms: false,
    },
  })

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true)

    try {
      // Convert form values to FormData for server action
      const formData = new FormData()
      formData.append('fullName', values.fullName)
      formData.append('number', values.number)
      formData.append('email', values.email)
      formData.append('pesId', values.pesId)
      formData.append('deviceModel', values.deviceModel)
      formData.append('discordUsername', values.discordUsername)
      formData.append('agreeToTerms', values.agreeToTerms.toString())

      const { submitRegistration } = await import(
        '@/actions/registrationAction'
      )
      const result = await submitRegistration(formData)

      if (!result.success) {
        toast({
          title: 'Registration Failed',
          description:
            result.error || 'Please check your information and try again.',
          variant: 'destructive',
        })
        return
      }

      // Reset form on success
      form.reset()
      setIsCompleted(true)

      // toast({
      //   title: 'Registration Successful!',
      //   description: 'You have been registered for the tournament.',
      // })
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleError = () => {
    setIsSubmitting(false)
    toast({
      title: 'Form Incomplete',
      description: 'Please fill in all required fields correctly.',
      variant: 'destructive',
    })
  }

  useEffect(() => {
    if (isCompleted) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isCompleted])

  if (isCompleted) return <RegCompleted game="eFootball" />

  return (
    <section className={cn('relative h-full w-full', className)}>
      <Spotlight
        className="-top-50 left-0 md:-top-40 md:left-60"
        fill="#ED1C24"
      />
      <div className="flex place-items-center justify-around gap-4">
        <h2 className="mt-20 text-center text-3xl leading-7 font-bold uppercase sm:text-4xl sm:leading-8 lg:text-5xl lg:leading-11">
          SOLTS
          <br />
          <span className="text-primary font-extrabold">
            {games.efootball.maxRegistration}
          </span>
        </h2>
        <div className="flex flex-col">
          <h2 className="mt-10 -mb-6 text-center text-5xl leading-10 font-bold uppercase">
            REGISTER
            <br />
            <span className="text-primary">NOW</span>
          </h2>
          <GameCard
            logo={games.efootball.logo}
            name={games.efootball.name}
            image={games.efootball.image}
            charecterName={games.efootball.charecterName}
            className="from-primary/50 bg-gradient-to-t"
            logoClassName={games.efootball.logoClassName}
          />
        </div>
        <h2 className="mt-20 text-center text-3xl leading-7 font-bold uppercase sm:text-4xl sm:leading-8 lg:text-5xl lg:leading-11">
          LEFT
          <br />
          <span className="text-primary font-extrabold">580</span>
        </h2>
      </div>
      <form
        onSubmit={form.handleSubmit(handleSubmit, handleError)}
        className="space-y-4"
      >
        <div className="bg-card border-primary relative flex flex-col gap-4 border-t-3 p-6">
          <div>
            <p className="text-foreground/80 text-sm">
              *one email, number can only be used once per game
            </p>

            <h2 className="text-primary text-3xl font-bold uppercase">
              PLAYER DETAILS
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {/* Full Name */}
            <Controller
              control={form.control}
              name="fullName"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                  <Input
                    id="full-name"
                    placeholder="Your full name"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />

            {/* Number */}
            <Controller
              control={form.control}
              name="number"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="number">
                    Number (valid Robi/Airtel number)
                  </FieldLabel>
                  <Input
                    id="number"
                    type="tel"
                    placeholder="Your Robi/Airtel number"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />

            {/* PES ID */}
            <Controller
              control={form.control}
              name="pesId"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="pes-id">PES ID</FieldLabel>
                  <Input
                    id="pes-id"
                    placeholder="Your PES ID"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />

            {/* Device Model */}
            <Controller
              control={form.control}
              name="deviceModel"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="device-model">Device Model</FieldLabel>
                  <Input
                    id="device-model"
                    placeholder="iPhone 17 Pro Max"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />

            {/* Discord Username */}
            <Controller
              control={form.control}
              name="discordUsername"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error && !!field.value}>
                  <FieldLabel htmlFor="discord-username">
                    Discord username
                  </FieldLabel>
                  <Input
                    id="discord-username"
                    placeholder="Your discord username"
                    className="-mb-2"
                    aria-invalid={!!fieldState.error && !!field.value}
                    {...field}
                  />
                  <FieldDescription
                    className={cn(
                      'text-destructive min-h-[1rem]',
                      !fieldState.error || !field.value ? 'invisible' : ''
                    )}
                  >
                    {fieldState.error?.message || '\u00A0'}
                  </FieldDescription>
                </Field>
              )}
            />
          </div>

          {/* Terms Checkbox */}
          <Controller
            control={form.control}
            name="agreeToTerms"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5"
                  />
                  <FieldLabel
                    htmlFor="terms"
                    className="-mb-2 leading-relaxed font-normal"
                  >
                    <div>
                      I&apos;ve read the tournament guidelines and appropriate{' '}
                      <a
                        href="/register/efootball"
                        className="text-primary font-bold underline underline-offset-4"
                      >
                        efootball rulebook
                      </a>{' '}
                      and I accept all the terms and conditions imposed by Robi
                      & Zenetic Esports
                    </div>
                  </FieldLabel>
                </div>
                <FieldDescription
                  className={cn(
                    'text-destructive ml-7 min-h-[1rem]',
                    !fieldState.error ? 'invisible' : ''
                  )}
                >
                  {fieldState.error?.message || '\u00A0'}
                </FieldDescription>
              </div>
            )}
          />

          {/* Submit Button */}
          <ProcessingButton
            type="submit"
            processing={isSubmitting}
            className="bg-primary hover:bg-primary/90 absolute right-8 -bottom-[5%]"
          >
            REGISTER NOW
          </ProcessingButton>
        </div>
      </form>
    </section>
  )
}
