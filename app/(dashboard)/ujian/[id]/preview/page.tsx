import React from 'react'
import PreviewLayout from '../_layouts/preview-layout'
import { SearchParams } from 'next/dist/server/request/search-params';
import { getExamSubmissionDetail } from '@/actions/exam-submission';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

async function PreviewPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const submissionId = (await searchParams).submissionId;
  const token = (await cookies()).get('token');

  if (!submissionId) redirect('/404', 'replace' as RedirectType);

  const examSubmission = await getExamSubmissionDetail(submissionId as string, token?.value!);
  if (!examSubmission.data) redirect('/404', 'replace' as RedirectType);

  return (
    <PreviewLayout data={examSubmission.data} />
  )
}

export default PreviewPage