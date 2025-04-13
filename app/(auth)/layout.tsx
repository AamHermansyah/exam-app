import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

async function LayoutAuth({ children }: { children: ReactNode }) {
  const token = (await cookies()).get('token');

  if (token?.value) redirect('/');

  return children;
}

export default LayoutAuth;
