import React from 'react'
import Overview from './_components/overview'
import Participants from './_components/participants'
import { Params } from 'next/dist/server/request/params'
import { cookies } from 'next/headers';
import { SearchParams } from 'next/dist/server/request/search-params';
import { redirect, RedirectType } from 'next/navigation';
import { getUserByToken } from '@/data/user';

async function UjianDetailPage({
  params,
  searchParams
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>
}) {
  const id = (await params).id;
  const page = (await searchParams).page;
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);
  if (user!.role === 'STUDENT') {
    redirect('/daftar-asesmen', 'replace' as RedirectType);
  };

  if (!id) return redirect('/404', 'replace' as RedirectType);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-8">
      <div className="order-2 lg:order-1 lg:col-span-8">
        <Participants
          id={id as string}
          token={token?.value!}
          page={typeof page === 'string' && !isNaN(+page) ? +page : 1}
        />
      </div>
      <div className="order-1 lg:order-2 lg:col-span-4 space-y-2">
        <h1 className="text-lg font-medium">Ringkasan</h1>
        <Overview id={id as string} token={token?.value!} />
      </div>
    </div>
  )
}

export default UjianDetailPage