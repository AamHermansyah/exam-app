import { getExamById } from "@/data/exam";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import React from "react";
import UjianLayout from "./_layouts/ujian-layout";

export const metadata: Metadata = {
  title: "ADLS - Informasi Ujian",
};

async function ExamInfoPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const id = (await searchParams).id;
  const token = (await cookies()).get('token');

  if (!id) return redirect('/404', 'replace' as RedirectType);

  const res = await getExamById({
    examId: id as string,
    token: token?.value!,
    onlyPublish: true,
    includeSubmission: true
  });

  const exam = res.data;
  if (!exam) return redirect('/404', 'replace' as RedirectType);

  return (
    <UjianLayout data={exam} token={token?.value!} />
  );
}

export default ExamInfoPage;
