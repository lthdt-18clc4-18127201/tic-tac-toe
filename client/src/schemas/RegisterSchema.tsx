import * as z from 'zod';

export const RegisterSchema = z.object({
    username: z
        .string()
        .min(3, "Username must not be lesser than 3 characters")
        .max(25, "Username must not be greater than 25 characters")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "The username must contain only letters, numbers and underscore (_)",
        ),
    email: z.string().email("Invalid email. Email must be a valid email address"),
    password: z
        .string()
        .min(3, "Password must not be lesser than 3 characters")
        .max(16, "Password must not be greater than 16 characters"),
    confirmpassword: z
        .string()
        .min(3, "Password must not be lesser than 3 characters")
        .max(16, "Password must not be greater than 16 characters"),
}).refine(data => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
  });

export type IFormRegisterInput = z.infer<typeof RegisterSchema>;
