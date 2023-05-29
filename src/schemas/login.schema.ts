import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().nonempty("Please enter your password"),
});

export type LoginCredentials = z.infer<typeof LoginSchema>;
