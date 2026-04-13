'use server'

import { registrationSchema, type RegistrationFormData } from '@/lib/schemas/registration'
import { RegConfirmationEmail } from '@/components/emails/confirmation-email'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// Test flag - set to true to test error handling
const TEST_ERROR = false

// Response type inferred from the action return
type RegistrationActionResult =
    | {
        success: true
        data: RegistrationFormData
    }
    | {
        success: false
        error: string
    }

export const submitRegistration = async (
    formData: FormData
): Promise<RegistrationActionResult> => {
    try {
        // Test error handling - remove this in production
        if (TEST_ERROR) {
            throw new Error('Test error: Registration service is temporarily unavailable')
        }

        // Extract form data
        const agreeToTermsValue = formData.get('agreeToTerms')
        const rawFormData = {
            fullName: formData.get('fullName'),
            number: formData.get('number'),
            email: formData.get('email'),
            pesId: formData.get('pesId'),
            deviceModel: formData.get('deviceModel'),
            discordUsername: formData.get('discordUsername'),
            agreeToTerms:
                agreeToTermsValue === 'true' || agreeToTermsValue === 'on',
        }

        // Validate using zod schema - this ensures full type safety
        const validationResult = registrationSchema.safeParse(rawFormData)

        if (!validationResult.success) {
            const firstError = validationResult.error.issues[0]
            return {
                success: false,
                error: firstError?.message || 'Validation failed',
            }
        }

        // At this point, validationResult.data is fully typed as RegistrationFormData
        const vData: RegistrationFormData = validationResult.data

        // Prepare email details for the confirmation email
        const emailDetails = [
            { label: 'Full Name', value: vData.fullName },
            { label: 'Phone Number', value: vData.number },
            // { label: 'Email', value: vData.email },
            { label: 'PES ID', value: vData.pesId },
            { label: 'Device Model', value: vData.deviceModel },
            { label: 'Discord Username', value: vData.discordUsername },
        ]

        const { data, error } = await resend.emails.send({
            from: 'Zeneti Esports <noreply@email.zeneticesports.com>',
            to: [vData.email],
            subject: 'Robi Mobile Mania 2026 Registration Confirmation',
            react: RegConfirmationEmail({
                name: vData.fullName,
                timestamp: new Date(),
                emailDetails,
            }),
        });

        if (error) {
            return {
                success: false,
                error: error.message || 'Failed to send confirmation email',
            }
        }

        return {
            success: true,
            data: vData,
        }
    } catch (error) {
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message,
            }
        }
        return {
            success: false,
            error: 'Something went wrong during registration',
        }
    }
}

