import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, { message: "Nama terlalu pendek" }),
  email: z.string().email({ message: "Email tidak valid" }),
  purpose: z.string().min(5, { message: "Tujuan harus diisi dengan jelas" }),
  institution: z.string().min(2, { message: "Instansi tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;