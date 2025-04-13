import React from 'react'
import TambahUjianLayout from './_layouts/tambah-ujian-layout'
import { cookies } from 'next/headers'

async function TambahUjianPage() {
  const token = (await cookies()).get('token');

  return (
    <TambahUjianLayout token={token?.value!} />
  )
}

export default TambahUjianPage