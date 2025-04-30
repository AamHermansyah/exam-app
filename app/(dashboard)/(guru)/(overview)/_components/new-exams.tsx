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
import { Badge } from "@/components/ui/badge";
import { getAllExams } from '@/data/exam';
import { formatDate } from '@/lib/utils';

interface IProps {
  token: string;
}

async function NewExams({ token }: IProps) {
  const { data: exams } = await getAllExams({
    token,
    page: 1
  });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Asesmen Terbaru</h3>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar asesmen yang tersedia dalam sistem.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama Asesmen</TableHead>
            <TableHead className="py-4">Kategori</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Tags</TableHead>
            <TableHead className="py-4">Jumlah Soal</TableHead>
            <TableHead className="py-4">Durasi</TableHead>
            <TableHead className="py-4">Total Peserta</TableHead>
            <TableHead className="pr-4 py-4 ">Tanggal</TableHead>
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
              <TableCell className="py-4">
                <Badge variant={!exam.publishedAt ? 'info' : 'default'} className="rounded-full">
                  {!exam.publishedAt ? 'Pending' : 'Publikasi'}
                </Badge>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default NewExams;
