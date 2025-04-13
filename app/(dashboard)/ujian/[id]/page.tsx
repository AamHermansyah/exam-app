import React from 'react'
import ExamLayout from './_layouts/exam-layout'
import { Params } from 'next/dist/server/request/params'
import { cookies } from 'next/headers';
import { getExamById } from '@/data/exam';
import { redirect, RedirectType } from 'next/navigation';
import { isSubmissionExpired } from '@/lib/utils';

async function UjianDetailPage({ params }: { params: Promise<Params> }) {
  const id = (await params).id;
  const token = (await cookies()).get('token');
  const res = await getExamById({
    examId: id as string,
    token: token?.value!,
    onlyPublish: true,
    includeQuestions: true,
    includeSubmission: true
  });

  const exam = res.data;
  if (!exam) return redirect('/404', 'replace' as RedirectType);

  const submission = exam.ExamSubmission[0];

  if (!submission) redirect('/404', 'replace' as RedirectType);

  if (submission && (submission?.score !== null || isSubmissionExpired(submission?.expireAt))) {
    redirect(`/ujian/${exam.id}/preview?submissionId=${submission.id}`, 'replace' as RedirectType);
  }

  return (
    <ExamLayout data={exam} token={token?.value!} />
  )
}

export default UjianDetailPage