import React, { useEffect, useState, useTransition } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { examSchema, ExamSchemaType } from "@/schemas/exam";
import { FormError } from "@/components/shared/form-error";
import { editExam } from "@/actions/exam";
import { categories } from "@/constants";
import { Exam } from "@/lib/generated/prisma";

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  token: string;
  data: Pick<Exam, 'id' | 'title' | 'duration' | 'category' | 'tags' | 'minScore'>;
}

const validKeys = ["title", "category", "duration", "tags", "minScore"] as const;

function EditInfoDialog({ onOpenChange, open, data, token }: IProps) {
  const [error, setError] = useState("");
  const [loading, startServer] = useTransition();

  const form = useForm<ExamSchemaType>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      title: "",
      tags: "",
      category: "",
    },
  });

  const { control, handleSubmit, setValue } = form;

  const onSubmit = (values: ExamSchemaType) => {
    startServer(() => {
      editExam(values, data.id, token)
        .then((data) => {
          if (data.status === 'success') {
            window.location.reload();
          } else {
            // @ts-ignore
            setError(data.message!);
          }
        });
    });
  };

  useEffect(() => {
    if (open) {
      validKeys.forEach((key) => {
        setValue(key, data[key]!);
      });
    }
  }, [open]);

  return (
    <AlertDialog
      open={open}
      onOpenChange={(open) => {
        if (!open) form.reset();
        onOpenChange(open);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Info</AlertDialogTitle>
          <AlertDialogDescription className="hidden" />
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 items-start gap-4">
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
                      type="number"
                      min={1}
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
            <div className="col-span-2">
              <FormError message={error} />
            </div>
            <AlertDialogFooter className="col-span-2">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type="submit" className="gap-2" disabled={loading}>
                {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                Simpan
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default EditInfoDialog