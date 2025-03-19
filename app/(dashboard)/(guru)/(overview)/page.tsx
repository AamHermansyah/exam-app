import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, BookOpen, Users, Clock } from "lucide-react";
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

function OverviewPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-blue-400 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total Ujian</CardTitle>
              <BookOpen size={28} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card className="bg-green-400 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total Siswa</CardTitle>
              <Users size={28} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">325</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-400 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Ujian Selesai</CardTitle>
              <ShieldCheck size={28} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">10</p>
            </CardContent>
          </Card>

          <Card className="bg-red-400 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Rata Rata Durasi</CardTitle>
              <Clock size={28} />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">90 menit</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Ujian Terbaru</h3>
        <Table className="w-full overflow-x-auto border">
          <TableCaption>Daftar ujian terbaru dibuat dalam sistem.</TableCaption>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default OverviewPage;
