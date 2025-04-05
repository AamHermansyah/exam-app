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

function KelolaUjianPage() {
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Kelola Ujian</h3>
        <Link href="/kelola-ujian/tambah">
          <Button className="bg-primary text-white">Tambah Ujian</Button>
        </Link>
      </div>
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
            <TableHead className="py-4">Tanggal</TableHead>
            <TableHead className="pr-4 py-4 text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((data, index) => (
            <TableRow key={data.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4">{data.name}</TableCell>
              <TableCell className="py-4">{data.category}</TableCell>
              <TableCell className="py-4 space-x-1">
                {data.tags.map((tags) => (
                  <Badge
                    key={crypto.randomUUID()}
                    className="rounded bg-neutral-200 text-neutral-900 hover:bg-neutral-200"
                  >
                    {tags}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="py-4">{data.questionCount}</TableCell>
              <TableCell className="py-4">{data.duration}</TableCell>
              <TableCell className="py-4">{data.totalParticipants} peserta</TableCell>
              <TableCell className="py-4">{data.date}</TableCell>
              <TableCell className="pr-4 py-4 text-center space-x-2">
                <Button variant="outline" size="icon">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Link href={`/kelola-ujian/${data.id}`} target="_blank">
                  <Button variant="outline" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default KelolaUjianPage