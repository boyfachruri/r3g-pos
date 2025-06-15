"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconSubtask,
  IconMenu4,
  IconFileTextShield,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

const data = {
  user: {
    name: "Boy Fachruri",
    email: "boyfachruri@gmail.com",
    avatar: "/r3g.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/main/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Users",
      url: "/main/users",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
};

const dataMenu = [
  {
    id: "1",
    title: "Dashboard",
    url: "/main/dashboard",
    icon: IconDashboard,
    child: []
  },
  {
    id: "2",
    title: "Access Management",
    url: "#",
    icon: undefined,
    child: [
      {
        id: "3",
        title: "Role",
        url: "/main/role",
        icon: IconSubtask,
      },
      {
        id: "4",
        title: "Menu",
        url: "/main/menu",
        icon: IconListDetails,
      },
      {
        id: "5",
        title: "Role Access",
        url: "/main/role-access",
        icon: IconFileTextShield,
      },
    ],
  },
  {
    id: "6",
    title: "Users Management",
    url: "#",
    icon: undefined,
    child: [
      {
        id: "7",
        title: "Users",
        url: "/main/users",
        icon: IconUsers,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/main/dashboard">
                {/* <IconInnerShadowTop className="!size-5" /> */}
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage src={data.user.avatar} alt={data.user.name} />
                </Avatar>

                <span className="text-base font-semibold">R3g Software</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dataMenu} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
