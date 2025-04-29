import React from 'react'
import Overview from "./_components/overview";
import NewExams from './_components/new-exams';
import { cookies } from 'next/headers';

async function OverviewPage() {
  const token = (await cookies()).get('token');

  return (
    <div className="space-y-10">
      <Overview token={token?.value!} />
      <NewExams token={token?.value!} />
    </div>
  );
}

export default OverviewPage;
