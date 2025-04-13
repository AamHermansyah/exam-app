import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(3, { message: "Nama terlalu pendek" }),
  email: z.string().email({ message: "Email tidak valid" }),
  purpose: z.string().min(5, { message: "Tujuan harus diisi dengan jelas" }),
  institution: z.string().min(2, { message: "Instansi tidak valid" }),
});

export type ProfileSchemaType = z.infer<typeof profileSchema>;