"use client";

import { type Icon } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export interface Child {
  id: string;
  title: string;
  url?: string;
  icon?: Icon;
}

export interface NavMainProps {
  id: string;
  title: string;
  url?: string;
  icon?: Icon;
  child: Child[];
}

interface Props {
  items: NavMainProps[];
}

export function NavMain({ items }: Props) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => (
        <SidebarGroup key={item.id}>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            {item?.child.length === 0 ? (
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href={item.url ?? "#"} passHref>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={clsx(
                        "min-w-8 duration-200 ease-linear cursor-pointer",
                        pathname === item.url
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-primary/90 hover:text-primary-foreground"
                      )}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            ) : (
              <SidebarMenu>
                {item.child.map((child) => {
                  const isActive = pathname === child.url;

                  return (
                    <SidebarMenuItem key={child.id}>
                      <Link href={child.url ?? "#"} passHref>
                        <SidebarMenuButton
                          tooltip={child.title}
                          className={clsx(
                            "min-w-8 duration-200 ease-linear cursor-pointer",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-primary/90 hover:text-primary-foreground"
                          )}
                        >
                          {child.icon && <child.icon className="w-4 h-4" />}
                          <span>{child.title}</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
