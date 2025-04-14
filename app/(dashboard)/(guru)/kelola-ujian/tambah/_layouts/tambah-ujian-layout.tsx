"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { examSchema, ExamSchemaType } from "@/schemas/exam";
import { categories, defaultDescription } from "@/constants";
import { useRouter } from "next/navigation";
import { createExam } from "@/actions/exam";
import { LoaderCircle } from "lucide-react";
import { FormError } from "@/components/shared/form-error";
import { RichTextEditor } from "@/components/core/richtext-editor";

interface IProps {
  token: string;
}

export default function TambahUjianLayout({ token }: IProps) {
  const [error, setError] = useState("");
  const [loading, startServer] = useTransition();
  const navigate = useRouter();

  const form = useForm<ExamSchemaType>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      title: "",
      tags: "",
      category: "",
      duration: 60,
      minScore: 80,
      description: defaultDescription
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (values: ExamSchemaType) => {
    startServer(() => {
      createExam(values, token)
        .then((data) => {
          if (data.status === 'success') {
            // @ts-ignore
            navigate.push(`/kelola-ujian/edit?id=${data.data?.id}`);
          } else {
            // @ts-ignore
            setError(data.message!);
          }
        });
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
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
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Durasi Ujian (menit)</FormLabel>
                <FormControl>
                  <Input
                    inputMode="numeric"
                    placeholder="Masukkan durasi dalam menit"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="minScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skor Minimal (%)</FormLabel>
                <Input
                  inputMode="numeric"
                  placeholder="Masukan persentase minimal skor"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Kategori</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih kategori ujian" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="tags"
            render={({ field }) => (
              <FormItem className="col-span-2">
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
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <RichTextEditor
                    value={field.value}
                    onChangeValue={(value) => {
                      console.log(value);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormError message={error} />
          </div>
          <Button type="submit" className="col-span-2 w-full gap-2" disabled={loading}>
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
            Simpan Ujian
          </Button>
        </form>
      </Form>
    </div>
  );
}
