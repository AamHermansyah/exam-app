import { z } from "zod";

export const registerSchema = z.object({
  type: z.enum(['student', 'teacher']),
  fullName: z.string().min(3, { message: "Nama terlalu pendek" }),
  email: z.string().email({ message: "Email tidak valid" }),
  purpose: z.string().optional(),
  institution: z.string().min(2, { message: "Instansi tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
  class: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.type === 'teacher') {
    if (!data.purpose || data.purpose.length < 5) {
      ctx.addIssue({
        path: ['purpose'],
        code: z.ZodIssueCode.custom,
        message: "Tujuan harus diisi minimal 5 huruf",
      });
    }
  }

  if (data.type === 'student') {
    if (!data.class || data.class.length < 1) {
      ctx.addIssue({
        path: ['class'],
        code: z.ZodIssueCode.custom,
        message: "Kelas harus diisi",
      });
    }
  }
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
