import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().nonempty("Please enter your password"),
  remember: z.boolean().optional().default(false),
});

export type LoginDetails = z.infer<typeof LoginSchema>;
