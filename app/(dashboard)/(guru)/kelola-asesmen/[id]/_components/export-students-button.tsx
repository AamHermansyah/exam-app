// components/DownloadExcelButton.tsx
"use client";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Submission } from "../type";
import { useTransition } from "react";
import { getExamSubmissionByExamId } from "@/data/exam-submission";
import { toast } from "sonner";

interface IProps {
  token: string;
  data: unknown[];
  id: string;
}

export default function ExportStudentsButton({ token, data, id }: IProps) {
  const [loading, startServer] = useTransition();

  const handleDownload = () => {
    if (loading) return;

    startServer(async () => {
      const loadingId = toast.loading('Data sedang di proses, silahkan tunggu!');
      const { data: submissions } = await getExamSubmissionByExamId(id, {
        token,
        page: 1,
        pageSize: 1000
      });

      const dataTable = submissions;
      const rows: Record<string, string | number>[] = [];
      const maxQuestions = Math.max(...dataTable.map((submission: any) => submission.answers.length));

      dataTable.forEach((submission, index) => {
        const base = {
          No: index + 1,
          Nama: submission.user.fullName,
          Email: submission.user.email,
          Kelas: submission.user.class!,
          Institusi: submission.user.institution,
          "Total Skor (%)": `${submission.score || 0}%`,
          "Jumlah Benar": submission.correct || 0,
          "Jumlah Salah": submission.incorrect || submission.answers.length,
          Lulus: submission.passed ? "Ya" : "Tidak",
          "Tanggal Submit": new Date(submission.submittedAt).toLocaleString()
        };

        // Tambahkan kolom Soal 1, Soal 2, ... dst.
        submission.answers.forEach((answer: any, index: number) => {
          // @ts-ignore
          base[`Soal ${index + 1}`] = answer.score;
        });

        // Pastikan semua kolom Soal 1 - N ada (untuk konsistensi kolom Excel)
        for (let i = submission.answers.length; i < maxQuestions; i++) {
          // @ts-ignore
          base[`Soal ${i + 1}`] = "";
        }

        rows.push(base);
      });

      // Buat worksheet dan workbook
      const worksheet = XLSX.utils.json_to_sheet(rows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Hasil Asesmen");

      // Simpan sebagai file
      const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
      const file = new Blob([excelBuffer], { type: "application/octet-stream" });
      saveAs(file, `Rekap - ${dataTable[0].exam.title}.xlsx`);

      toast.dismiss(loadingId);
      setTimeout(() => {
        toast.success('Data berhasil di download');
      }, 200);
    });
  };

  return (
    <Button
      className="gap-2"
      onClick={handleDownload}
      disabled={(data.length === 0) || loading}
    >
      <Download className="w-4 h-4" /> Export
    </Button>
  );
}
