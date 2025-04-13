import { Badge } from "@/components/ui/badge";
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
} from "@/components/ui/table"
import { getAllExamSubmissions } from "@/data/exam-submission";
import { formatDate, getBadgeVariantSubmissionStatus, getStatusLabel, isSubmissionExpired } from "@/lib/utils";
import { Eye } from "lucide-react";
import { SearchParams } from "next/dist/server/request/search-params";
import { cookies } from "next/headers";
import Link from "next/link";

async function RiwayatPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const page = (await searchParams).page;
  const token = (await cookies()).get('token');
  const { data: submissions, ...pagination } = await getAllExamSubmissions({
    token: token?.value!,
    page: typeof page === 'string' && !isNaN(+page) ? +page : 1
  });

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
          {submissions.length > 0 ? submissions.map((submission, index) => {
            const statusLabel = getStatusLabel(submission.score, submission.passed, submission.expireAt);
            const isProgressing = statusLabel === 'Berjalan';

            return (
              <TableRow key={submission.id}>
                <TableCell className="pl-4 py-4">{index + 1}</TableCell>
                <TableCell className="py-4">{submission.exam.title}</TableCell>
                <TableCell className="py-4">
                  {submission.score !== null ? `${submission.score}/100` : '-'}
                </TableCell>
                <TableCell className="py-4">
                  {`${submission?.score !== null
                    ? `${submission.correct}/${submission.correct! + submission.incorrect!}` : '-'}`}
                </TableCell>
                <TableCell className="py-4">
                  <Badge
                    variant={getBadgeVariantSubmissionStatus(submission.score, submission.passed, submission.expireAt)}
                    className="rounded-full"
                  >
                    {statusLabel}
                  </Badge>
                </TableCell>
                <TableCell className="py-4">{formatDate(submission.updatedAt, { withTime: true })}</TableCell>
                <TableCell className="pr-4 py-4 space-x-2">
                  <Link
                    href={`/ujian/${submission.examId}${!isProgressing ? `/preview?submissionId=${submission.id}` : ''}`}
                    target="_blank"
                  >
                    <Button variant="outline" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            )
          }) : (
            <TableRow>
              <TableCell colSpan={7} className="px-4 py-4 text-center">
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

export default RiwayatPage;
