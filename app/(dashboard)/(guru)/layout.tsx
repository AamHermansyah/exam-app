import { getUserByToken } from "@/data/user";
import { cookies, headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { ReactNode } from "react";

async function TeacherLayout({ children }: { children: ReactNode }) {
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);

  const headersList = await headers();
  const pathname = headersList.get('x-pathname');

  if (user!.role === 'STUDENT') {
    if (pathname === '/') redirect('/daftar-asesmen', 'replace' as RedirectType);
    else redirect('/404', 'replace' as RedirectType);
  };

  return children;
}

export default TeacherLayout;
