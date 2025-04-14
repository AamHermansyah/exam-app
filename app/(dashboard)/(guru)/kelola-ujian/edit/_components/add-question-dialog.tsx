import React, { useEffect, useRef, useState, useTransition } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Plus, X } from "lucide-react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cleanText, fileToBase64 } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { questionsSchema, QuestionsSchemaType } from "@/schemas/exam";
import { createOrEditQuestionWithAnswers } from "@/actions/question";
import { FormError } from "@/components/shared/form-error";
import { Answer, Question } from "@/lib/generated/prisma";

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  token: string;
  examId: string;
  type: 'edit' | 'create';
  editData: Question & {
    answers: Answer[];
  } | null;
}

function AddQuestionDialog({ onOpenChange, open, examId, token, type, editData }: IProps) {
  const [error, setError] = useState("");
  const [loading, startServer] = useTransition();

  const form = useForm<QuestionsSchemaType>({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: "",
      image: "",
      imageLabel: "",
      type: "RADIO",
      answers: [{ answerText: "", isCorrect: false }],
      correctAnswerIndex: -1,
    },
  });

  const { control, handleSubmit, watch, setValue } = form;
  const {
    fields: answerFields,
    append: appendAnswer,
    remove: removeAnswer,
  } = useFieldArray({
    control,
    name: "answers",
  });

  const imageInput = watch('image');
  const questionType = watch('type');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (data: QuestionsSchemaType) => {
    startServer(() => {
      createOrEditQuestionWithAnswers(data, examId, token, type, editData?.id)
        .then((data) => {
          if (data.status === 'success') {
            form.reset();
            window.location.reload();
          } else {
            // @ts-ignore
            setError(data.message!);
          }
        });
    });
  };

  useEffect(() => {
    if (type === 'edit' && editData) {
      // Isi field dasar
      setValue("title", editData.title);
      setValue("image", editData.image || "");
      setValue("imageLabel", editData.imageLabel || "");
      setValue("type", editData.type);

      // Isi field jawaban
      const mappedAnswers = editData.answers.map((ans) => ({
        answerText: ans.answerText,
        isCorrect: ans.isCorrect,
      }));
      setValue("answers", mappedAnswers);

      // Jika tipe radio, set index jawaban yang benar
      if (editData.type === "RADIO" && typeof editData.correctAnswerIndex === "number") {
        setValue("correctAnswerIndex", editData.correctAnswerIndex);
      } else {
        // Untuk CHECKBOX, pastikan correctAnswerIndex diset -1
        setValue("correctAnswerIndex", -1);
      }
    }
  }, [type, editData, setValue]);

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
          <AlertDialogTitle>{type === 'create' ? 'Tambah' : 'Edit'} Pertanyaan</AlertDialogTitle>
          <AlertDialogDescription className="hidden" />
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
              <FormField
                control={control}
                name="title"
                render={({ field }) => {
                  // Handler untuk auto resize textarea
                  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
                    if (textAreaRef.current) {
                      // Reset height agar mendapatkan nilai scrollHeight yang aktual
                      textAreaRef.current.style.height = "auto";
                      // Atur tinggi sesuai isi, dengan batas maksimal 150px
                      const newHeight = Math.min(textAreaRef.current.scrollHeight, 150);
                      textAreaRef.current.style.height = `${newHeight}px`;
                    }
                    // Pastikan untuk memanggil onChange bawaan react-hook-form
                    field.onChange(e);
                  };

                  return (
                    <FormItem>
                      <FormLabel>Judul Pertanyaan</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          ref={textAreaRef}
                          onInput={handleInput}
                          placeholder="Judul Pertanyaan"
                          style={{
                            minHeight: 38,
                            maxHeight: "150px",
                            resize: "none",
                          }}
                          className="w-full scrollbar-hidden"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {/* Input file untuk gambar */}
              <FormField
                control={control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gambar (opsional)</FormLabel>
                    {imageInput && (
                      <div className="w-full h-[100px] border-2 border-dashed rounded-md">
                        <img
                          src={imageInput}
                          alt="image-question"
                          className="object-contain h-full w-auto mx-auto"
                        />
                      </div>
                    )}
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const base64 = await fileToBase64(file);
                            field.onChange(base64);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="imageLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Label Gambar (opsional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Label gambar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Pertanyaan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a questions type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="RADIO">Radio (Pilih 1)</SelectItem>
                        <SelectItem value="CHECKBOX">Checkbox (Pilih Banyak)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <Label>Jawaban</Label>
                <div className="space-y-2">
                  {answerFields.map((answer, answerIndex) => (
                    <div key={answer.id} className="flex items-center gap-2">
                      <FormField
                        control={control}
                        name={`answers.${answerIndex}.answerText`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Teks jawaban"
                                onChange={(e) => {
                                  const value = cleanText(e.target.value);
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center gap-2">
                        <FormLabel>Benar?</FormLabel>
                        {questionType === "RADIO" ? (
                          <Controller
                            control={control}
                            name="correctAnswerIndex"
                            defaultValue={-1}
                            render={({ field }) => (
                              <input
                                type="radio"
                                checked={field.value === answerIndex}
                                onChange={() => field.onChange(answerIndex)}
                              />
                            )}
                          />
                        ) : (
                          <FormField
                            control={control}
                            name={`answers.${answerIndex}.isCorrect`}
                            render={({ field }) => (
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            )}
                          />
                        )}
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeAnswer(answerIndex)}
                        type="button"
                        disabled={answerIndex === 0}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-dashed w-full text-muted-foreground"
                    onClick={() => appendAnswer({ answerText: "", isCorrect: false })}
                  >
                    <Plus className="w-4 h-4" />
                    Tambah Jawaban
                  </Button>
                  <FormError message={error} />
                </div>
              </div>
            </div>
            <AlertDialogFooter>
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

export default AddQuestionDialog