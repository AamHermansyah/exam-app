'use client'

import { toggleActiveStudent } from "@/actions/user";
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
import { LoaderCircle } from "lucide-react"
import { useTransition } from "react";
import { BiBlock } from "react-icons/bi";
import { IoLockOpenSharp } from "react-icons/io5";
import { toast } from "sonner";

interface IProps {
  email: string;
  token: string;
  isActive: boolean;
}

function NonActivateAlert({ email, token, isActive }: IProps) {
  const [loading, startServer] = useTransition();

  const handleDelete = () => {
    startServer(() => {
      toggleActiveStudent(!isActive, email, token)
        .then((data) => {
          if (data.status === 'success') {
            toast.success(data.message);
            window.location.reload();
          } else {
            // @ts-ignore
            toast.error(data.message!);
          }
        });
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={isActive ? 'destructive' : 'success'} size="icon">
          {isActive ? <BiBlock className="w-4 h-4" /> : <IoLockOpenSharp className="w-4 h-4" />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini bisa dikembalikan kapan saja.
            Ini akan {!isActive ? 'mengaktifkan kembali' : 'menonaktifkan'} siswa <b>&quot;{email}&quot;</b> dari database kami.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
          <Button
            variant={isActive ? 'destructive' : 'success'}
            className="gap-2"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
            {isActive ? 'Nonaktifkan' : 'Aktifkan'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default NonActivateAlert
