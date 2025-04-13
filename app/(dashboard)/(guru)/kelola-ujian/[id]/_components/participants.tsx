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
import { getExamSubmissionByExamId } from '@/data/exam-submission';
import { formatDate, getBadgeVariantSubmissionStatus, getStatusLabel } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Pagination } from '@/components/ui/pagination';

interface IProps {
  id: string;
  token: string;
  page: number;
}

async function Participants({ id, page, token }: IProps) {
  const { data: submissions, ...pagination } = await getExamSubmissionByExamId(id, { token, page });

  return (
    <div className="w-full space-y-4">
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
            <TableHead className="pr-4 py-4">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((item, index) => {
            const statusLabel = getStatusLabel(item.score, item.passed, item.expireAt);

            return (
              <TableRow key={item.id}>
                <TableCell className="pl-4 py-4">{index + 1}</TableCell>
                <TableCell className="py-4">{item.user.fullName}</TableCell>
                <TableCell className="py-4">{item.user.email}</TableCell>
                <TableCell className="py-4">{formatDate(item.updatedAt, { withTime: true })}</TableCell>
                <TableCell className="py-4">
                  <Badge
                    variant={getBadgeVariantSubmissionStatus(item.score, item.passed, item.expireAt)}
                    className="rounded-full"
                  >
                    {statusLabel}
                  </Badge>
                </TableCell>
                <TableCell className="py-4">
                  {item.score !== null ? `${item.score}/100` : "-"}
                </TableCell>
                <TableCell className="pr-4 py-4 space-x-2">
                  {typeof item.passed === 'boolean' ? (
                    <Link href={`/ujian/${item.examId}/preview?submissionId=${item.id}`} target="_blank">
                      <Button variant="outline" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="icon" disabled>
                      <Eye className="w-4 h-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
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

export default Participants
