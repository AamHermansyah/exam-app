import { AppSidebar } from "@/components/layout/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getUserByToken } from "@/data/user";
import { cookies } from "next/headers";
import { ReactNode } from "react";

async function DashboadLayout({ children }: { children: ReactNode }) {
  const token = (await cookies()).get('token');
  const user = await getUserByToken(token!.value);

  return (
    <SidebarProvider>
      <AppSidebar user={user!} />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <main className="px-4 pb-4 h-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboadLayout;
