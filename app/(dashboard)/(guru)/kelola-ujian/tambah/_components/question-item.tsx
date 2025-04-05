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
import { Plus, Trash, X } from "lucide-react";
import { Control, Controller, useFieldArray, useWatch } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { fileToBase64 } from "@/lib/utils";
import { ExamFormData } from "../page";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";

interface IProps {
  control: Control<ExamFormData>;
  questionIndex: number;
  removeQuestion: (index: number) => void;
}

function QuestionItem({ control, questionIndex, removeQuestion }: IProps) {
  const {
    fields: answerFields,
    append: appendAnswer,
    remove: removeAnswer,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.answers`,
  });

  // Pantau tipe pertanyaan (radio/checkbox)
  const questionType = useWatch({ control, name: `questions.${questionIndex}.type` });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="p-4 border rounded space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Pertanyaan {questionIndex + 1}</h3>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => removeQuestion(questionIndex)}
          type="button"
          disabled={questionIndex === 0}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
      <FormField
        control={control}
        name={`questions.${questionIndex}.title`}
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
        name={`questions.${questionIndex}.image`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gambar (opsional)</FormLabel>
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
        name={`questions.${questionIndex}.imageLabel`}
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
        name={`questions.${questionIndex}.type`}
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
                <SelectItem value="radio">Radio (Pilih 1)</SelectItem>
                <SelectItem value="checkbox">Checkbox (Pilih Banyak)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-2">
        <Label>Jawaban</Label>
        {answerFields.map((answer, answerIndex) => (
          <div key={answer.id} className="flex items-center gap-2">
            <FormField
              control={control}
              name={`questions.${questionIndex}.answers.${answerIndex}.answerText`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Teks jawaban" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <FormLabel>Benar?</FormLabel>
              {questionType === "radio" ? (
                <Controller
                  control={control}
                  name={`questions.${questionIndex}.correctAnswerIndex`}
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
                  name={`questions.${questionIndex}.answers.${answerIndex}.isCorrect`}
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
        <div>
          <Button
            type="button"
            variant="outline"
            className="border-dashed w-full text-muted-foreground"
            onClick={() => appendAnswer({ answerText: "", isCorrect: false })}
          >
            <Plus className="w-4 h-4" />
            Tambah Jawaban
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem
