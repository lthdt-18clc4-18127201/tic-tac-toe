import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email("Invalid email. Email must be a valid email address"),
    password: z
        .string()
        .min(3, "Password must not be lesser than 3 characters")
        .max(16, "Password must not be greater than 16 characters"),
})

export type IFormLoginInput = z.infer<typeof LoginSchema>;
