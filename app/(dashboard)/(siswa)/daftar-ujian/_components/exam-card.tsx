'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BriefcaseMedical, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IProps {
  data: {
    title: string;
    categories: string[];
    slug: string;
  };
}

function ExamCard({ data }: IProps) {
  return (
    <div className="p-4 rounded-md border">
      <div className="w-full h-full flex flex-col justify-between gap-4">
        <div className="relative w-full min-h-[200px] flex-1 rounded-md bg-primary/20 flex justify-center items-center">
          <BriefcaseMedical className="w-20 h-20 text-primary" />
          <span className="absolute px-2 py-1 rounded-full bg-background border shadow top-3 right-3 flex items-center gap-2 text-xs">
            <Users className="w-4 h-4" /> 20 Peserta
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <div className="w-full flex gap-2 items-center flex-wrap">
            {data.categories.map((category) => (
              <Badge
                key={crypto.randomUUID()}
                className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <Link href={`/ujian/${data.slug}`} className="block">
          <Button
            size="lg"
            className="w-full sm:text-base"
          >
            Mulai
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ExamCard;
