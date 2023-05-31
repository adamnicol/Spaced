import z from "zod";

export const RegistrationSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    username: z
      .string()
      .trim()
      .min(2, "Username must be at least 2 characters")
      .max(25, "Username must be less than 25 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    retypePassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords do not match",
    path: ["retypePassword"],
  });

export type RegistrationDetails = z.infer<typeof RegistrationSchema>;
