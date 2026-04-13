import { z } from 'zod'

// Registration form schema
export const registrationSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters.'),
    number: z
        .string()
        .regex(
            /^(\+8801[68]|8801[68]|01[68])([0-9]{6}|[0-9]{8})$/,
            'Must be a valid Robi/Airtel number'
        ),
    email: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address.'),
    pesId: z.string().min(1, 'PES ID is required.'),
    deviceModel: z.string().min(1, 'Device model is required.'),
    discordUsername: z.string().min(2, 'Discord username is required.'),
    agreeToTerms: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the terms and conditions.',
    }),
})

// Inferred type from schema
export type RegistrationFormData = z.infer<typeof registrationSchema>

