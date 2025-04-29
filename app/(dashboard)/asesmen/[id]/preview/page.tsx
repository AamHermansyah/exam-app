import React from 'react'
import PreviewLayout from '../_layouts/preview-layout'
import { SearchParams } from 'next/dist/server/request/search-params';
import { getExamSubmissionDetail } from '@/data/exam-submission';
import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation';

async function PreviewPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { submissionId, role } = await searchParams;
  const token = (await cookies()).get('token');

  if (!submissionId) redirect('/404', 'replace' as RedirectType);

  const examSubmission = await getExamSubmissionDetail(submissionId as string, token?.value!);
  if (!examSubmission.data) redirect('/404', 'replace' as RedirectType);

  return (
    <PreviewLayout
      data={examSubmission.data}
      roleSearchParams={role as string | undefined}
    />
  )
}

export default PreviewPage