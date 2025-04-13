'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories } from "@/constants";
import { Exam, ExamSubmission } from "@/lib/generated/prisma";
import { isSubmissionExpired } from "@/lib/utils";
import { Clock3, FileText, Tag, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IProps {
  data: Exam & {
    submissionCount: number;
    hasSubmitted: boolean;
    ExamSubmission: ExamSubmission[];
  };
}

function ExamCard({ data }: IProps) {
  const submission = data.ExamSubmission[0];
  const Icon = categories.find((category) => category.value === data.category)?.icon;

  return (
    <div className="p-4 rounded-md border shadow-sm hover:shadow-md transition">
      <div className="w-full h-full flex flex-col justify-between gap-4">
        <div className="relative w-full min-h-[200px] flex-1 rounded-md bg-primary/10 flex justify-center items-center">
          {Icon && (
            <Icon className="w-20 h-20 text-primary" />
          )}
          <span className="absolute px-2 py-1 rounded-full bg-background border shadow top-3 right-3 flex items-center gap-2 text-xs">
            <Users className="w-4 h-4" /> {data.submissionCount} Submit
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground capitalize">
            <FileText className="w-4 h-4" />
            {data.category.replaceAll('-', ' ')}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="w-4 h-4" />
            {data.duration} menit
          </div>
          <div className="w-full flex gap-2 items-center flex-wrap">
            {data.tags.split(',').map((tag) => (
              <Badge
                key={crypto.randomUUID()}
                className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200 capitalize"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag.trim()}
              </Badge>
            ))}
          </div>
        </div>

        {(data.hasSubmitted && submission?.score !== null) || isSubmissionExpired(submission?.expireAt) ? (
          <Button variant="muted" className="w-full" disabled>
            Selesai
          </Button>
        ) : (
          <Link href={`/ujian${submission?.score === null ? `/${data.id}` : `?id=${data.id}`}`} className="block">
            <Button className="w-full">
              {submission?.score === null ? 'Lanjutkan' : 'Mulai'}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ExamCard;
