import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(3, { message: "Nama terlalu pendek" }),
  email: z.string().email({ message: "Email tidak valid" }),
  purpose: z.string().min(5, { message: "Tujuan harus diisi minimal 5 huruf" }),
  class: z.string().min(1, { message: "Kelas harus diisi" }),
  institution: z.string().min(2, { message: "Instansi tidak valid" }),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, { message: "Password saat ini minimal 6 karakter" }),
    newPassword: z.string().min(6, { message: "Password baru minimal 6 karakter" }),
    confirmNewPassword: z.string().min(6, { message: "Konfirmasi password minimal 6 karakter" }),
  })
  .refine((data) => data.newPassword !== data.currentPassword, {
    path: ['newPassword'],
    message: "Password baru tidak boleh sama dengan password saat ini",
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: "Password baru dan konfirmasi harus sama",
  });

export type ProfileSchemaType = z.infer<typeof profileSchema>;
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;