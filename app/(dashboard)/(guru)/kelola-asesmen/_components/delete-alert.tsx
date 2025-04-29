'use client'

import { softDeleteExam } from "@/actions/exam";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { LoaderCircle, Trash } from "lucide-react"
import { useTransition } from "react";

interface IProps {
  examTitle: string;
  examId: string;
  token: string;
}

function DeleteAlert({ examId, examTitle, token }: IProps) {
  const [loading, startServer] = useTransition();

  const handleDelete = () => {
    startServer(() => {
      softDeleteExam(examId, token)
        .then((data) => {
          if (data.status === 'success') {
            window.location.reload();
          } else {
            // @ts-ignore
            setError(data.message!);
          }
        });
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak bisa dikembalikan.
            Ini akan menghapus data asesmen <b>&quot;{examTitle}&quot;</b> dari database kami.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            className="gap-2"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
            Hapus
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAlert
