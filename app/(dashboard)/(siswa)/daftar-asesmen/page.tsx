import React from 'react'
import { SearchParams } from 'next/dist/server/request/search-params';
import { getAllPublishExams } from '@/data/exam';
import { cookies } from 'next/headers';
import ExamCard from './_components/exam-card';
import { Pagination } from '@/components/ui/pagination';

async function DaftarUjianPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const page = (await searchParams).page;
  const token = (await cookies()).get('token');
  const { data: exams, ...pagination } = await getAllPublishExams({
    token: token?.value!,
    page: typeof page === 'string' && !isNaN(+page) ? +page : 1
  });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">
        Daftar Asesmen
      </h3>
      {exams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((exam) => (
            <ExamCard key={exam.id} data={exam} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[100px] flex justify-center items-center">
          <p className="w-full text-center">Belum ada asesmen yang dilaksanakan saat ini</p>
        </div>
      )}
      <div className="w-full flex justify-end">
        <Pagination
          className="w-max"
          page={pagination.page}
          pages={pagination.totalPages}
        />
      </div>
    </div>
  )
}

export default DaftarUjianPage