'use client'

import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { User } from "@/lib/generated/prisma";
import { profileSchema, ProfileSchemaType } from "@/schemas/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/shared/form-error";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

interface IProps {
  user: Omit<User, 'password' | 'updatedAt'>;
  token: string;
}

function ProfileDetail({ user, token }: IProps) {
  const [loading, startServer] = useTransition();
  const [error, setError] = useState("");

  const form = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
      purpose: user.purpose,
      institution: user.institution,
    },
  });

  function onSubmit(values: ProfileSchemaType) {
    setError("");
    startServer(() => {
      updateUser(values, token)
        .then((data) => {
          if (data.status === 'success') {
            toast.success('Profile berhasil di update!');
            window.location.reload();
          } else {
            // @ts-ignore
            setError(data.message!);
          }
        });
    });
  }

  return (
    <div className="w-full px-4 py-6 border rounded-md">
      <div className="space-y-4">
        <h3 className="font-semibold leading-none">
          Informasi Pribadi
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {user.role === 'STUDENT' ? 'Nama Lengkap' : 'Nama & Gelar'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Jhon Doe ${user.role === 'TEACHER' ? 'S.Pd.' : ''}`}
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
                    <Input type="email" placeholder="m@student.com" disabled {...field} />
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
            <FormError message={error} />
            <div className="space-y-1">
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                Update
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ProfileDetail