"use client"

import * as React from "react"
import { NavUser } from "@/components/layout/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { navigations } from "@/constants"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { User } from "@/lib/generated/prisma"

type TProps = React.ComponentProps<typeof Sidebar> & {
  user: Omit<User, 'password' | 'updatedAt'>
}

export function AppSidebar({ user, ...props }: TProps) {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-[--radix-dropdown-menu-trigger-width] flex items-center gap-2">
          <Image
            src="/images/adls-logo.png"
            alt="logo"
            width={50}
            height={50}
            priority
          />
          {state === 'expanded' && (
            <h1 className="flex-1 text-sm py-1.5 text-primary font-semibold whitespace-wrap overflow-hidden">
              Asesmen Digital Literasi Sains
            </h1>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        {(Object.keys(navigations) as Array<keyof typeof navigations>).map((key) => {
          if (key === 'guru' && user.role === 'STUDENT') return null;
          if (key === 'siswa' && user.role === 'TEACHER') return null;

          return (
            <SidebarGroup key={`sb-${key}`}>
              <SidebarGroupLabel className="uppercase text-primary">{key}</SidebarGroupLabel>
              <SidebarMenu>
                {navigations[key].map((item) => (
                  <Link key={item.title} href={item.url}>
                    <SidebarMenuButton
                      variant="primary"
                      tooltip={item.title}
                      isActive={
                        (pathname === '/' && item.url === '/')
                        || (item.url !== '/' && pathname.includes(item.url))}
                      className="cursor-pointer"
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
