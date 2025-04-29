import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { logoutUser } from '@/actions/auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserByToken } from '@/data/user';

async function AccountNotActivatedPage() {
  const token = (await cookies()).get('token');
  if (!token?.value) redirect('/login');

  const user = await getUserByToken(token.value);
  if (!user) redirect('/404');
  if (user.isActive) redirect('/');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-muted px-4">
      <div className="flex items-center gap-2 justify-center font-medium">
        <Image
          src="/images/adls-logo.png"
          alt="logo"
          width={75}
          height={75}
          priority
        />
        <h1 className="text-2xl font-semibold">Asesmen Digital Literasi Sains</h1>
      </div>
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-md text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-yellow-500 w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Akun Dinonaktifkan
        </h1>
        <p className="text-gray-600 mb-4">
          Maaf, akun Anda telah dinonaktifkan oleh administrator. Silakan hubungi pihak sekolah atau pengelola sistem untuk informasi lebih lanjut.
        </p>
        <form action={async () => {
          'use server';
          await logoutUser();
          redirect('/login');
        }}>
          <button className="inline-block mt-4 text-primary hover:underline cursor-pointer">
            Kembali ke Halaman Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountNotActivatedPage;
