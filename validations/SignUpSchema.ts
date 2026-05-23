import { z } from "zod";

export const SignUpSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters"),

 email: z
      .string()
      .trim()
      .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), "Invalid Email")
      .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
    
});