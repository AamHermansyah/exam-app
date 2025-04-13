"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import InputPassword from "@/components/core/input-password"
import Link from "next/link"
import { registerSchema, RegisterSchemaType } from "@/schemas/register"
import { useState, useTransition } from "react"
import { createUser } from "@/actions/user"
import { FormError } from "@/components/shared/form-error"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { LoaderCircle } from "lucide-react"

interface IProps {
  type?: 'teacher' | 'student'
}

export function RegisterForm({
  className,
  type = 'student',
  ...props
}: React.ComponentPropsWithoutRef<"div"> & IProps) {
  const [loading, startServer] = useTransition();
  const [error, setError] = useState("");
  const navigate = useRouter();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      purpose: "",
      institution: "",
      password: "",
    },
  })

  function onSubmit(values: RegisterSchemaType) {
    setError("");
    startServer(() => {
      createUser(values, type === 'teacher')
        .then((data) => {
          if (data.status === 'success') {
            toast.success('Akun berhasil dibuat. Silahkan login!');
            navigate.push('/login');
          } else {
            setError(data.message!);
          }
        });
    });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Selamat Datang!</CardTitle>
          <CardDescription>
            {type === 'student'
              ? 'Silahkan lakukan registrasi untuk mengakses website ini'
              : 'Halo guru! silahkan daftar terlebih dahulu untuk menggunakan platform ini'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {type === 'student' ? 'Nama Lengkap' : 'Nama & Gelar'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`Jhon Doe ${type === 'teacher' ? 'S.Pd.' : ''}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="m@student.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tujuan Penggunaan</FormLabel>
                    <FormControl>
                      <Input placeholder="Co: Untuk belajar mandiri" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asal Instansi</FormLabel>
                    <FormControl>
                      <Input placeholder="Co: Universitas Indonesia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <InputPassword placeholder="Masukan password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <div className="space-y-1">
                <Button type="submit" className="w-full gap-2" disabled={loading}>
                  {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                  Registrasi
                </Button>
                <div className="text-sm">
                  Apakah anda {type === 'student' ? 'seorang guru' : 'hanya pengguna'}?{" "}
                  <Link
                    href={`/register${type === 'student' ? '/teacher' : ''}`}
                    className="text-primary underline underline-offset-4"
                  >
                    Daftar disini
                  </Link>
                </div>
              </div>
              <div className="text-center text-sm">
                Sudah punya akun?{" "}
                <Link href="/login" className="text-primary underline underline-offset-4">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
