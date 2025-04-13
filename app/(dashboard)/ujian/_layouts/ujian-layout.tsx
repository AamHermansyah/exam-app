'use client'

import React, { useTransition } from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { rules } from "@/constants";
import { AlertCircle, Clock3, FileText, Info, LoaderCircle, ShieldCheck } from "lucide-react";
import { Exam, ExamSubmission } from '@/lib/generated/prisma';
import { createExamSubmission } from '@/actions/exam-submission';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { isSubmissionExpired } from '@/lib/utils';

interface IProps {
  data: Exam & {
    ExamSubmission: ExamSubmission[];
  };
  token: string;
}

function UjianLayout({ data, token }: IProps) {
  const [loading, startServer] = useTransition();
  const navigate = useRouter();
  const submission = data.ExamSubmission[0];

  const handleStartExam = () => {
    startServer(() => {
      createExamSubmission({
        duration: data.duration,
        examId: data.id,
        token
      })
        .then((res) => {
          if (res.status === 'success') {
            navigate.push(`/ujian/${data.id}`);
          } else {
            // @ts-expect-error
            toast.error(res.message!);
          }
        });
    });
  }

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-xl sm:text-2xl font-bold">{data.title}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1 capitalize">
            <FileText className="w-4 h-4" /> {data.category.replaceAll('-', ' ')}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 className="w-4 h-4" /> {data.duration} menit
          </span>
          <span className="flex items-center gap-1">
            <Info className="w-4 h-4" /> Skor minimum {data.minScore}
          </span>
        </div>
        <div className="flex justify-center gap-2 flex-wrap mt-2">
          {data.tags.split(',').map((tag) => (
            <Badge key={tag} className="bg-neutral-200 text-neutral-800 hover:bg-neutral-200 capitalize">
              {tag.trim()}
            </Badge>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-xl p-6 space-y-4 border">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <ShieldCheck className="w-5 h-5 text-primary" />
          Peraturan Ujian
        </div>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <AlertCircle className="w-4 h-4" />
          Setelah tombol &quot;Mulai Ujian&quot; ditekan, waktu akan langsung berjalan.
        </div>
        {!!submission && (submission?.score !== null || isSubmissionExpired(submission?.expireAt)) ? (
          <Button variant="muted" className="w-full sm:w-auto" disabled>
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
            Selesai
          </Button>
        ) : (
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              if (!!submission) navigate.push(`/ujian/${data.id}`);
              else handleStartExam();
            }}
            disabled={loading}
          >
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
            {!!submission ? 'Lanjutkan' : 'Mulai Ujian'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default UjianLayout