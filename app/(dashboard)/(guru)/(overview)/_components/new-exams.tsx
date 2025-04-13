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

const exams = [
  {
    id: 1,
    name: "Mathematics Exam",
    category: "Mathematics",
    tags: ["Midterm", "Mandatory"],
    questionCount: 40,
    duration: "90 minutes",
    totalParticipants: 120,
    date: "March 20, 2025"
  },
  {
    id: 2,
    name: "Physics Exam",
    category: "Science",
    tags: ["Tryout"],
    questionCount: 35,
    duration: "75 minutes",
    totalParticipants: 98,
    date: "March 22, 2025"
  },
  {
    id: 3,
    name: "Chemistry Exam",
    category: "Science",
    tags: ["Final"],
    questionCount: 50,
    duration: "120 minutes",
    totalParticipants: 85,
    date: "March 25, 2025"
  },
];

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
      <h3 className="font-semibold text-lg">Ujian Terbaru</h3>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar ujian yang tersedia dalam sistem.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama Ujian</TableHead>
            <TableHead className="py-4">Kategori</TableHead>
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
              <TableCell className="py-4">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default NewExams;
