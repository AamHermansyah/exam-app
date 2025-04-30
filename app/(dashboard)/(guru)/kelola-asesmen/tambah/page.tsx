import React from 'react'
import TambahUjianLayout from './_layouts/tambah-ujian-layout'
import { cookies } from 'next/headers'
import { getUserByToken } from '@/data/user';
import { redirect, RedirectType } from 'next/navigation';

async function TambahUjianPage() {
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);
  if (user!.role === 'STUDENT') {
    redirect('/daftar-asesmen', 'replace' as RedirectType);
  };

  return (
    <TambahUjianLayout token={token?.value!} />
  )
}

export default TambahUjianPage