import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(5, { message: "Email must be at least 5 characters." })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(5, { message: "Password must be at least 5 characters" })
    .max(100, { message: "Password must not be more than 100 characters" }),
});

export const signupSchema = loginSchema.extend({
  name: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone No. is Required" })
    .trim()
    .min(10, { message: "Phone No. must be at least 10 characters." })
    .max(10, { message: "Phone No. must not be more than 10 characters" }),
});