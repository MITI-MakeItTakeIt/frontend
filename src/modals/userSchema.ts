
import { z } from "zod";

export const userRegisterSchema = z
    .object({
        email: z.string().email({ message: "Invalid email format" }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" }),
        password_check: z.string(),
        nickname: z.string().min(5, { message: "Minimum of 5 or more characters" }),
    })
    .refine((data) => data.password === data.password_check, {
        message: "Password confirmation must match the password",
        path: ["password_check"],
    });

// export const userLoginSchema = z.object({
//     email: z.string().email({ message: "Invalid email format" }), password: z
//         .string()
//         .min(8, { message: "Password must be at least 8 characters" }),

// })