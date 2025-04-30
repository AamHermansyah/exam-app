import { cookies } from 'next/headers';
import React from 'react'
import EditUjianLayout from './_layouts/edit-ujian-layout';
import { getExamById } from '@/data/exam';
import { SearchParams } from 'next/dist/server/request/search-params';
import { redirect, RedirectType } from 'next/navigation';
import { getUserByToken } from '@/data/user';

async function EditUjianPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const id = (await searchParams).id;
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);
  if (user!.role === 'STUDENT') {
    redirect('/daftar-asesmen', 'replace' as RedirectType);
  };

  const res = await getExamById({
    examId: id as string,
    token: token?.value!,
    includeQuestions: true
  });
  const exam = res.data;

  if (!exam) return redirect('/404', 'replace' as RedirectType);

  return (
    <EditUjianLayout
      token={token?.value!}
      data={exam}
    />
  )
}

export default EditUjianPage