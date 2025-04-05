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
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

function Participants() {
  const usersList = [
    {
      id: 1,
      nama: "Ahmad Fauzi",
      email: "ahmad@example.com",
      joinedAt: "10 Mar 2025, 09:30",
      status: "Selesai",
      score: 85,
      duration: "38 menit"
    },
    {
      id: 2,
      nama: "Siti Aisyah",
      email: "siti@example.com",
      joinedAt: "10 Mar 2025, 09:45",
      status: "Sedang Dikerjakan",
      score: null,
      duration: null
    },
    {
      id: 3,
      nama: "Budi Santoso",
      email: "budi@example.com",
      joinedAt: "10 Mar 2025, 10:00",
      status: "Sedang Dikerjakan",
      score: null,
      duration: null
    },
  ];

  return (
    <div className="w-full">
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar siswa yang telah bergabung di ujian.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama</TableHead>
            <TableHead className="py-4">Email</TableHead>
            <TableHead className="py-4">Bergabung</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Skor</TableHead>
            <TableHead className="py-4">Durasi</TableHead>
            <TableHead className="pr-4 py-4">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersList.map((siswa, index) => (
            <TableRow key={siswa.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4">{siswa.nama}</TableCell>
              <TableCell className="py-4">{siswa.email}</TableCell>
              <TableCell className="py-4">{siswa.joinedAt}</TableCell>
              <TableCell className="py-4">{siswa.status}</TableCell>
              <TableCell className="py-4">
                {siswa.score !== null ? `${siswa.score}/100` : "-"}
              </TableCell>
              <TableCell className="py-4">{siswa.duration || "-"}</TableCell>
              <TableCell className="pr-4 py-4 space-x-2">
                <Link href="/ujian/1/preview?user=user@gmail.com">
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

export default Participants
