import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Pencil } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'next/dist/server/request/search-params';
import { cookies } from 'next/headers';
import { getAllExams } from '@/data/exam';
import { Pagination } from '@/components/ui/pagination';
import { formatDate } from '@/lib/utils';
import DeleteAlert from './_components/delete-alert';

async function KelolaUjianPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const page = (await searchParams).page;
  const token = (await cookies()).get('token');
  const { data: exams, ...pagination } = await getAllExams({
    token: token?.value!,
    page: typeof page === 'string' && !isNaN(+page) ? +page : 1
  });

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Kelola Asesmen</h3>
        <Link href="/kelola-asesmen/tambah">
          <Button className="bg-primary text-white">Tambah Asesmen</Button>
        </Link>
      </div>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar asesmen yang tersedia dalam sistem.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama Asesmen</TableHead>
            <TableHead className="py-4">Kategori</TableHead>
            <TableHead className="py-4">Tags</TableHead>
            <TableHead className="py-4">Jumlah Soal</TableHead>
            <TableHead className="py-4">Durasi</TableHead>
            <TableHead className="py-4">Total Peserta</TableHead>
            <TableHead className="py-4">Tanggal</TableHead>
            <TableHead className="pr-4 py-4 text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam, index) => (
            <TableRow key={exam.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4 max-w-[150px]">
                {exam.title}
              </TableCell>
              <TableCell className="py-4 capitalize">
                {exam.category.replaceAll('-', ' ')}
              </TableCell>
              <TableCell className="py-4 flex flex-wrap gap-1.5">
                {exam.tags.split(',').map((tag) => (
                  <Badge
                    key={crypto.randomUUID()}
                    className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200 capitalize"
                  >
                    {tag.trim()}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="py-4">{exam._count.questions}</TableCell>
              <TableCell className="py-4">{exam.duration} Menit</TableCell>
              <TableCell className="py-4">{exam._count.ExamSubmission} Submit</TableCell>
              <TableCell className="py-4">{formatDate(exam.createdAt, { withTime: true })}</TableCell>
              <TableCell className="pr-4 py-4 flex flex-wrap justify-center gap-2">
                <Link href={`/kelola-asesmen/edit?id=${exam.id}`} target="_blank">
                  <Button variant="outline" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href={`/kelola-asesmen/${exam.id}`} target="_blank">
                  <Button variant="outline" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
                <DeleteAlert
                  token={token?.value!}
                  examId={exam.id}
                  examTitle={exam.title}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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

export default KelolaUjianPage