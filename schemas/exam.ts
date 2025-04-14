import { z } from "zod";

const tagsRegex = /^[A-Za-z]+(?:,[A-Za-z]+)*$/;
// Schema untuk ujian secara keseluruhan
export const examSchema = z.object({
  title: z.string().min(1, "Judul ujian harus diisi"),
  tags: z
    .string()
    .min(1, "Tags harus diisi")
    .regex(tagsRegex, "Format tags tidak valid. Contoh yang benar: 'Computer,Basic'"),
  category: z.string().min(1, "Kategori harus diisi"),
  duration: z.coerce.number().min(1, "Durasi minimal 1 menit"),
  minScore: z
    .coerce.number()
    .min(10, "Skor minimal tidak boleh kurang dari 10")
    .max(100, "Skor minimal tidak boleh lebih dari 100"),
  description: z.string().min(27, "Deskripsi minimal 20 karakter"),
});

export type ExamSchemaType = z.infer<typeof examSchema>;

// Schema untuk jawaban
const answerSchema = z.object({
  answerText: z.string().min(1, "Jawaban harus diisi"),
  isCorrect: z.boolean(),
});

export const questionsSchema = z.object({
  title: z.string().min(1, "Judul pertanyaan harus diisi"),
  // Field image akan menyimpan string base64
  image: z.string().optional(),
  imageLabel: z.string().optional(),
  type: z.enum(["RADIO", "CHECKBOX"]),
  answers: z.array(answerSchema).min(1, "Minimal ada 1 jawaban"),
  // Field tambahan untuk tipe radio
  correctAnswerIndex: z.number().optional(),
})

export type QuestionsSchemaType = z.infer<typeof questionsSchema>;