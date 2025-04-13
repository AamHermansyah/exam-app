"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import InputPassword from "@/components/core/input-password"
import Link from "next/link"
import { loginSchema, LoginSchemaType } from "@/schemas/login"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { loginUser } from "@/actions/auth"
import { toast } from "sonner"
import { FormError } from "@/components/shared/form-error"
import { LoaderCircle } from "lucide-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [loading, startServer] = useTransition();
  const [error, setError] = useState("");
  const navigate = useRouter();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: LoginSchemaType) {
    setError("");
    startServer(() => {
      loginUser(values)
        .then((data) => {
          if (data.status === 'success') {
            toast.success('Login berhasil!');
            navigate.push('/');
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
            Silahkan lakukan login terlebih dahulu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
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
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                Login
              </Button>
              <div className="text-center text-sm">
                Belum punya akun?{" "}
                <Link href="/register" className="text-primary underline underline-offset-4">
                  Registrasi
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
