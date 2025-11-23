"use client"

import * as React from "react"
import {
  ArrowLeftRight,
  CreditCard,
  Headphones,
  Grid2x2,
  Clock,
  NotepadText,
  History,
  Settings
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const data = {
  user: {
    name: "Arthur Taylor",
    email: "arthur@alignui.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Grid2x2,
      isActive: true,
    },
    {
      title: "My Cards",
      url: "#",
      icon: CreditCard,
    },
    {
      title: "Transfer",
      url: "#",
      icon: ArrowLeftRight,
    },
    {
      title: "Transactions",
      url: "#",
      icon: History,
    },
    {
      title: "Payments",
      url: "#",
      icon: NotepadText,
    },
    {
      title: "Exchange",
      url: "#",
      icon: Clock,
    },
  ],
  projects: [
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      name: "Support",
      url: "#",
      icon: Headphones,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="border-b py-8">
              <a href="#">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={"/logo.svg"} alt={"logo"} className="pointer-events-none"/>
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Apex</span>
                  <span className="truncate text-xs">Finance & Banking</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
