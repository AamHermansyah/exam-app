import React from "react";
import ProfileDetail from "./_layouts/profile-detail";
import { cookies } from "next/headers";
import { getUserByEmail, getUserByToken } from "@/data/user";
import ChangePassword from "./_layouts/change-password";
import { SearchParams } from "next/dist/server/request/search-params";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { User } from "@/lib/generated/prisma";

async function MyAccountPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const token = (await cookies()).get('token');
  const email = (await searchParams).email;
  const user = await getUserByToken(token?.value!);

  if (!user || (!!email && user.role !== 'TEACHER')) redirect('/404');

  let student: null | Omit<User, 'password' | 'updatedAt'> = null;

  if (!!email) {
    student = await getUserByEmail(email as string, token?.value!);

    if (!student) redirect('/404');
  }

  return (
    <div className={cn(
      'w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4',
      !!email ? 'max-w-lg h-full items-center' : 'max-w-5xl'
    )}>
      <div className={cn(!!email ? 'lg:col-span-12' : 'lg:col-span-7')}>
        <ProfileDetail
          user={!!student ? student : user}
          token={token?.value!}
          isOwnProfile={!student}
        />
      </div>
      {!email && (
        <div className="lg:col-span-5">
          <ChangePassword token={token?.value!} />
        </div>
      )}
    </div>
  );
}

export default MyAccountPage;
