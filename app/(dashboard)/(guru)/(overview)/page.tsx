import React from 'react'
import Overview from "./_components/overview";
import NewExams from './_components/new-exams';
import { cookies, headers } from 'next/headers';
import { getUserByToken } from '@/data/user';
import { redirect, RedirectType } from 'next/navigation';

async function OverviewPage() {
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);

  if (user!.role === 'STUDENT') {
    redirect('/daftar-asesmen', 'replace' as RedirectType);
  };

  return (
    <div className="space-y-10">
      <Overview token={token?.value!} />
      <NewExams token={token?.value!} />
    </div>
  );
}

export default OverviewPage;
