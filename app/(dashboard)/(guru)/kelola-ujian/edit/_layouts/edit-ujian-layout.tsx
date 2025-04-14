"use client";

import React, { useState, useTransition } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, LoaderCircle, Pencil, Plus } from "lucide-react";
import AddQuestionDialog from "../_components/add-question-dialog";
import QuestionCardCheckbox from "@/components/shared/question-card-checkbox";
import QuestionCardRadio from "@/components/shared/question-card-radio";
import { Separator } from "@/components/ui/separator";
import { Answer, Exam, Question } from "@/lib/generated/prisma";
import EditInfoDialog from "../_components/edit-info-dialog";
import { toast } from "sonner";
import { publishExam } from "@/actions/exam";
import { HTMLRenderer } from "@/components/core/html-renderer";

interface IProps {
  token: string;
  data: unknown;
}

export default function EditUjianLayout({ token, data }: IProps) {
  const [openAddQuestion, setOpenAddQuestion] = useState(false);
  const [openEditExamInfo, setOpenEditExamInfo] = useState(false);
  const [questionIdEdit, setQuestionIdEdit] = useState<string | null>(null);
  const [loading, startServer] = useTransition();
  const [deleteToastId, setDeleteToastId] = useState<string | number | null>(null);
  const { questions, ...exam } = data as Exam & {
    questions: (Question & { answers: Answer[] })[]
  };

  const questionsEditData = questionIdEdit ? questions.find((q) => questionIdEdit === q.id)! : null;

  return (
    <>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="space-y-2 border rounded-xl p-4 shadow-md">
          <h1 className="text-lg sm:text-xl font-medium">{exam.title}</h1>
          <Separator />
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <h2 className="text-sm text-primary">Durasi</h2>
              <p className="font-medium leading-none">
                {exam.duration} Menit
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-primary">Status</h2>
              <Badge variant={!exam.publishedAt ? 'info' : 'default'} className="rounded-full">
                {!exam.publishedAt ? 'Pending' : 'Publikasi'}
              </Badge>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-primary">Total Pertanyaan</h2>
              <p className="font-medium leading-none">{questions.length} Soal</p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-primary">Skor Minimal</h2>
              <p className="font-medium leading-none">{exam.minScore}/100</p>
            </div>
            <div className="space-y-1">
              <h2 className="text-sm text-primary">Kategori</h2>
              <p className="font-medium leading-none capitalize">
                {exam.category.replaceAll('-', ' ')}
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm text-primary">Tags</h2>
            <div className="w-full flex gap-2 items-center flex-wrap">
              {exam.tags.split(',').map((tag) => (
                <Badge
                  key={crypto.randomUUID()}
                  className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200 capitalize"
                >
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-sm text-primary">Deskripsi</h2>
            <HTMLRenderer
              htmlString={exam.description || 'Tidak ada deskripsi'}
              className="tip-tap border rounded-md p-3"
            />
          </div>
          {!exam.publishedAt && (
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpenEditExamInfo(true)}
              >
                Edit Info
              </Button>
              <Button
                className="w-full"
                disabled={!!deleteToastId || questions.length === 0}
                onClick={() => {
                  const deleteId = toast.custom((id) => {
                    return (
                      <div className="bg-card p-4 rounded-md border">
                        <h1 className="font-medium">Apakah kamu yakin?</h1>
                        <p className="text-sm text-muted-foreground">
                          Setelah publikasi ujian ini tidak dapat di edit lagi. Tolong pastikan kembali data dengan benar!
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <Button
                            variant="outline"
                            className="w-full"
                            disabled={loading}
                            onClick={() => {
                              toast.dismiss(id);
                              setDeleteToastId(null);
                            }}
                          >
                            Batal
                          </Button>
                          <Button
                            variant="destructive"
                            className="w-full gap-2"
                            disabled={loading}
                            onClick={() => {
                              startServer(() => {
                                publishExam(exam.id, token)
                                  .then((data) => {
                                    if (data.status === 'success') {
                                      window.location.reload();
                                    } else {
                                      // @ts-ignore
                                      toast.error(data.message!);
                                    }
                                    toast.dismiss(id);
                                    setDeleteToastId(null);
                                  });
                              });
                            }}
                          >
                            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                            Konfirmasi
                          </Button>
                        </div>
                      </div>
                    )
                  }, { duration: 0 });

                  setDeleteToastId(deleteId);
                }}
              >
                Publikasi
              </Button>
            </div>
          )}
        </div>
        {questions.map((question) => {
          return (
            <div key={question.id} className="relative space-y-2 border rounded-xl p-4 shadow-md">
              {!exam.publishedAt && (
                <div className="absolute top-2 right-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setOpenAddQuestion(true);
                      setQuestionIdEdit(question.id);
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              )}
              {question.type === 'CHECKBOX' ? (
                <QuestionCardCheckbox
                  question={question.title}
                  answers={question.answers}
                  correctAnswers={
                    question.answers
                      .filter((ans) => ans.isCorrect)
                      .map((ans) => ans.id)
                  }
                  imageUrl={question.image}
                  imageLabel={question.imageLabel}
                  readOnly
                />
              ) : (
                <QuestionCardRadio
                  question={question.title}
                  answers={question.answers}
                  correctAnswer={question.answers[question.correctAnswerIndex!]?.id}
                  imageUrl={question.image}
                  imageLabel={question.imageLabel}
                  readOnly
                />
              )}
            </div>
          )
        })}
        {!exam.publishedAt && (
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2 border-dashed border-2"
            onClick={() => setOpenAddQuestion(true)}>
            <Plus className="w-4 h-4" />
            Tambah Pertanyaan
          </Button>
        )}
      </div>
      <AddQuestionDialog
        type={questionIdEdit ? 'edit' : 'create'}
        editData={questionsEditData}
        open={openAddQuestion}
        onOpenChange={(open) => {
          if (!open) setQuestionIdEdit(null);
          setOpenAddQuestion(open);
        }}
        token={token}
        examId={exam.id}
      />
      <EditInfoDialog
        open={openEditExamInfo}
        onOpenChange={setOpenEditExamInfo}
        token={token}
        data={{
          id: exam.id,
          title: exam.title,
          category: exam.category,
          duration: exam.duration,
          tags: exam.tags,
          minScore: exam.minScore || 0,
          description: exam.description
        }}
      />
      <Button
        className="fixed bottom-4 right-4 gap-2"
        onClick={() => {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }}
      >
        <ArrowDown className="w-4 h-4" />
        Go to bottom
      </Button>
    </>
  );
}
