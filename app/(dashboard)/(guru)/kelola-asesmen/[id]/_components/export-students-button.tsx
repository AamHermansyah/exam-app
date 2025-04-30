// components/DownloadExcelButton.tsx
"use client";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Submission } from "../type";

interface IProps {
  data: unknown[];
}

export default function ExportStudentsButton({ data }: IProps) {
  const handleDownload = async () => {
    const dataTable = data as Submission[];
    const rows: Record<string, string | number>[] = [];

    const maxQuestions = Math.max(...dataTable.map((submission: any) => submission.answers.length));

    dataTable.forEach((submission: Submission, index) => {
      const base = {
        No: index + 1,
        Nama: submission.user.fullName,
        Email: submission.user.email,
        Kelas: submission.user.class,
        Institusi: submission.user.institution,
        "Total Skor (%)": `${submission.score}%`,
        "Jumlah Benar": submission.correct,
        "Jumlah Salah": submission.incorrect,
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
  };

  return (
    <Button
      className="gap-2"
      onClick={handleDownload}
      disabled={data.length === 0}
    >
      <Download className="w-4 h-4" /> Export
    </Button>
  );
}
