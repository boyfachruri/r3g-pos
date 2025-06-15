"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import type { Icon } from "@tabler/icons-react";

// Interfaces
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

// Sample data
const initialMenus: NavMainProps[] = [
  {
    id: "1",
    title: "Dashboard",
    url: "/main/dashboard",
    child: [],
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
      },
      {
        id: "4",
        title: "Menu",
        url: "/main/menu",
      },
      {
        id: "5",
        title: "Role Access",
        url: "/main/role-access",
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
      },
    ],
  },
];

type MenuItem = {
  id: string;
  title: string;
  parentTitle?: string | null;
};

const MenuList = () => {
  const [search, setSearch] = useState("");
  const [menus, setMenus] = useState<NavMainProps[]>(initialMenus);

  const handleView = (item: MenuItem) => {
    console.log("View menu:", item);
  };

  const handleUpdate = (item: MenuItem) => {
    console.log("Update menu:", item);
  };

  const handleDelete = (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      setMenus((prev) =>
        prev
          .map((menu) => ({
            ...menu,
            child: menu.child.filter((c) => c.id !== id),
          }))
          .filter((menu) => menu.id !== id)
      );
    }
  };

  const handleAdd = () => {
    console.log("Add new item");
  };

  // Flatten parent and child into a single list
  const flattened: MenuItem[] = menus.flatMap((menu) => {
    const parentItem: MenuItem = {
      id: menu.id,
      title: menu.title,
      parentTitle: null,
    };
    const childItems: MenuItem[] = menu.child.map((child) => ({
      id: child.id,
      title: child.title,
      parentTitle: menu.title,
    }));
    return [parentItem, ...childItems];
  });

  const filtered = flattened.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search + Add */}
      <div className="flex w-full items-center justify-between gap-2">
        <Input
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAdd} className="whitespace-nowrap">
          Add Menu
        </Button>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {filtered.map((item) => (
          <Card key={item.id} className="shadow-sm border rounded-lg">
            <CardContent className="flex w-full items-center justify-between">
              {/* Left Info */}
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {item.parentTitle ?? "—"}
                </p>
              </div>

              {/* Action Menu */}
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleView(item)}>
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleUpdate(item)}>
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 focus:text-red-600"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default MenuList;
