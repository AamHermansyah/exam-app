import { getUserByToken } from "@/data/user";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { ReactNode } from "react";

async function StudentLayout({ children }: { children: ReactNode }) {
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);

  if (user!.role === 'TEACHER') redirect('/404', 'replace' as RedirectType);

  return children;
}

export default StudentLayout;
