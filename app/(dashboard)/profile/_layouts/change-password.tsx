'use client'

import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { User } from "@/lib/generated/prisma";
import { changePasswordSchema, ChangePasswordSchemaType, profileSchema, ProfileSchemaType } from "@/schemas/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/shared/form-error";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { changePassword, updateUser } from "@/actions/user";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import InputPassword from "@/components/core/input-password";

interface IProps {
  token: string;
}

function ChangePassword({ token }: IProps) {
  const [loading, startServer] = useTransition();
  const [error, setError] = useState("");

  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
  });

  function onSubmit(values: ChangePasswordSchemaType) {
    setError("");
    startServer(() => {
      changePassword(values, token)
        .then((data) => {
          if (data.status === 'success') {
            toast.success(data.message);
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
        <h3 className="text-lg font-semibold leading-none">
          Ubah Password
        </h3>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password Saat Ini</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="Masukan password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password Baru</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="Masukan password baru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Konfirmasi</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="Konfirmasi password baru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <div className="space-y-1">
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading && <LoaderCircle className="w-4 h-4 animate-spin" />}
                Ubah password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ChangePassword