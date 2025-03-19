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
import { cn } from "@/lib/utils"

const user = {
  name: "Jhon Doe",
  email: "m@student.com",
  avatar: "/avatars/shadcn.jpg",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className={cn(
          'text-center text-primary font-semibold w-[--radix-dropdown-menu-trigger-width] whitespace-wrap overflow-hidden',
          state === 'collapsed' && !isMobile ? 'text-sm py-1.5' : 'tracking-wider px-4 py-2.5'
        )}>
          {state === 'collapsed' && !isMobile ? 'UK' : 'UjiKita'}
        </h1>
      </SidebarHeader>
      <SidebarContent>
        {(Object.keys(navigations) as Array<keyof typeof navigations>).map((key) => (
          <SidebarGroup key={key}>
            <SidebarGroupLabel className="uppercase text-primary">{key}</SidebarGroupLabel>
            <SidebarMenu>
              {navigations[key].map((item) => (
                <Link key={item.title} href={item.url}>
                  <SidebarMenuButton variant="primary" tooltip={item.title} className="cursor-pointer">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
