import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllStudents, getUserByToken } from "@/data/user";
import { formatDate } from "@/lib/utils";
import { Pencil } from "lucide-react";
import { SearchParams } from "next/dist/server/request/search-params";
import { cookies } from "next/headers";
import Link from "next/link";
import NonActivateAlert from "./_layouts/nonactivate-alert";
import { Badge } from "@/components/ui/badge";
import { redirect, RedirectType } from "next/navigation";

async function SiswaPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const page = (await searchParams).page;
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);
  if (user!.role === 'STUDENT') {
    redirect('/daftar-asesmen', 'replace' as RedirectType);
  };

  const { data: students, ...pagination } = await getAllStudents({
    token: token?.value!,
    page: typeof page === 'string' && !isNaN(+page) ? +page : 1
  });

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Daftar Siswa</h3>
      <Table className="w-full overflow-x-auto border">
        <TableCaption>Daftar siswa yang telah mendaftar di website.</TableCaption>
        <TableHeader>
          <TableRow className="bg-primary/50 hover:bg-primary/50">
            <TableHead className="pl-4 py-4">No</TableHead>
            <TableHead className="py-4">Nama</TableHead>
            <TableHead className="py-4">Email</TableHead>
            <TableHead className="py-4">Status</TableHead>
            <TableHead className="py-4">Tanggal Daftar</TableHead>
            <TableHead className="py-4">Instansi/Sekolah</TableHead>
            <TableHead className="py-4">Kelas</TableHead>
            <TableHead className="pr-4 py-4 text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.length > 0 ? students.map((siswa, index) => (
            <TableRow key={siswa.id}>
              <TableCell className="pl-4 py-4">{index + 1}</TableCell>
              <TableCell className="py-4">{siswa.fullName}</TableCell>
              <TableCell className="py-4">{siswa.email}</TableCell>
              <TableCell className="py-4">
                {siswa.isActive ? (
                  <Badge variant="success" className="rounded-full">Aktif</Badge>
                ) : (
                  <Badge variant="destructive" className="rounded-full">Nonaktif</Badge>
                )}
              </TableCell>
              <TableCell className="py-4">{formatDate(siswa.createdAt)}</TableCell>
              <TableCell className="py-4">{siswa.institution}</TableCell>
              <TableCell className="py-4">{siswa.class || '-'}</TableCell>
              <TableCell className="pr-4 py-4 flex flex-wrap justify-center gap-2">
                <Link href={`/profile?email=${siswa.email}`}>
                  <Button variant="outline" size="icon">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </Link>
                <NonActivateAlert
                  token={token?.value!}
                  email={siswa.email}
                  isActive={siswa.isActive}
                />
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5} className="px-4 py-4 text-center">
                Data masih kosong
              </TableCell>
            </TableRow>
          )}
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
  );
}

export default SiswaPage;
