"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import QuestionItem from "./_components/question-item";

// Schema untuk jawaban
const answerSchema = z.object({
  answerText: z.string().min(1, "Jawaban harus diisi"),
  isCorrect: z.boolean(),
});

// Schema untuk pertanyaan
const questionSchema = z.object({
  title: z.string().min(1, "Judul pertanyaan harus diisi"),
  // Field image akan menyimpan string base64
  image: z.string().optional(),
  imageLabel: z.string().optional(),
  type: z.enum(["radio", "checkbox"]),
  answers: z.array(answerSchema).min(1, "Minimal ada 1 jawaban"),
  // Field tambahan untuk tipe radio
  correctAnswerIndex: z.number().optional(),
});

const tagsRegex = /^[A-Za-z]+(?:,[A-Za-z]+)*$/;
// Schema untuk ujian secara keseluruhan
const examSchema = z.object({
  title: z.string().min(1, "Judul ujian harus diisi"),
  tags: z
    .string()
    .min(1, "Tags harus diisi")
    .regex(tagsRegex, "Format tags tidak valid. Contoh yang benar: 'Computer,Basic'"),
  category: z.string().min(1, "Kategori harus diisi"),
  questions: z.array(questionSchema).min(1, "Minimal ada 1 pertanyaan"),
});

export type ExamFormData = z.infer<typeof examSchema>;

export default function TambahUjian() {
  const form = useForm<ExamFormData>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      title: "",
      tags: "",
      category: "",
      questions: [
        {
          title: "",
          image: "",
          imageLabel: "",
          type: "radio",
          answers: [{ answerText: "", isCorrect: false }],
          correctAnswerIndex: -1,
        },
      ],
    },
  });

  const { control, handleSubmit } = form;

  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: ExamFormData) => {
    console.log("Data ujian:", data);
    // Lakukan aksi penyimpanan data ujian ke backend atau state management
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-medium mb-4">Tambah Ujian</h1>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 items-start gap-4">
          {/* Informasi Ujian */}
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Judul Ujian</FormLabel>
                <FormControl>
                  <Input placeholder="Judul Ujian" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Matematika, Aljabar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kategori</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih kategori ujian" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="matematika">Matematika</SelectItem>
                    <SelectItem value="fisika">Fisika</SelectItem>
                    <SelectItem value="informatika">Informatika</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4 col-span-2">
            <Label>Pertanyaan</Label>
            {questionFields.map((question, index) => (
              <QuestionItem
                key={question.id}
                control={control}
                questionIndex={index}
                removeQuestion={removeQuestion}
              />
            ))}
            <Button
              type="button"
              variant="default"
              className="w-full gap-2"
              onClick={() =>
                appendQuestion({
                  title: "",
                  image: "",
                  imageLabel: "",
                  type: "radio",
                  answers: [{ answerText: "", isCorrect: false }],
                  correctAnswerIndex: -1,
                })
              }
            >
              <Plus className="w-4 h-4" />
              Tambah Pertanyaan
            </Button>
          </div>
          <div className="col-span-2 w-full flex justify-end">
            <Button type="submit">Simpan Ujian</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
