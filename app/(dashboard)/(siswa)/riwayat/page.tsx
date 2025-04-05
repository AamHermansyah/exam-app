import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye } from "lucide-react";
import Link from "next/link";

function RiwayatPage() {
  // Contoh data riwayat ujian
  const riwayatUjian = [
    { id: 1, name: "Ujian Matematika", score: 85, status: "Lulus", joinedAt: "10 Maret 2025", correct: 17, totalQuestions: 20 },
    { id: 2, name: "Ujian Fisika", score: 75, status: "Lulus", joinedAt: "12 Maret 2025", correct: 15, totalQuestions: 20 },
    { id: 3, name: "Ujian Kimia", score: 60, status: "Tidak Lulus", joinedAt: "15 Maret 2025", correct: 12, totalQuestions: 20 },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">
        Riwayat Ujian
      </h3>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar ujian yang telah kamu ikuti.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama Ujian</TableHead>
            <TableHead className="py-4">Skor</TableHead>
            <TableHead className="py-4">Benar / Total</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Tanggal</TableHead>
            <TableHead className="pr-4 py-4">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {riwayatUjian.map((ujian, index) => (
            <TableRow key={ujian.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4">{ujian.name}</TableCell>
              <TableCell className="py-4">{ujian.score}/100</TableCell>
              <TableCell className="py-4">{ujian.correct} / {ujian.totalQuestions}</TableCell>
              <TableCell className="py-4">{ujian.status}</TableCell>
              <TableCell className="py-4">{ujian.joinedAt}</TableCell>
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
  );
}

export default RiwayatPage;
