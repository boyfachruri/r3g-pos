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

// Define the Role type
interface Role {
  id: string;
  name: string;
  createdAt: Date;
}

// Initial data
const initialRoles: Role[] = [
  {
    id: "1",
    name: "Super Admin",
    createdAt: new Date("2024-06-01"),
  },
  {
    id: "2",
    name: "Admin",
    createdAt: new Date("2024-05-27"),
  },
  {
    id: "3",
    name: "Store Manager",
    createdAt: new Date("2024-05-20"),
  },
  {
    id: "4",
    name: "Cashier",
    createdAt: new Date("2024-05-15"),
  },
  {
    id: "5",
    name: "Inventory Manager",
    createdAt: new Date("2024-05-10"),
  },
  {
    id: "6",
    name: "Sales Clerk",
    createdAt: new Date("2024-05-05"),
  },
  {
    id: "7",
    name: "Customer Service",
    createdAt: new Date("2024-05-01"),
  },
  {
    id: "8",
    name: "Accountant",
    createdAt: new Date("2024-04-25"),
  },
  {
    id: "9",
    name: "Purchasing Staff",
    createdAt: new Date("2024-04-20"),
  },
  {
    id: "10",
    name: "Warehouse Staff",
    createdAt: new Date("2024-04-15"),
  },
];


const RoleList = () => {
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  const handleView = (role: Role) => {
    console.log("View role:", role);
  };

  const handleUpdate = (role: Role) => {
    console.log("Update role:", role);
  };

  const handleDelete = (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this role?");
    if (confirmed) {
      setRoles((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleAdd = () => {
    console.log("Add new role");
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search + Add */}
      <div className="flex w-full items-center justify-between gap-2">
        <Input
          placeholder="Search role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAdd} className="whitespace-nowrap">
          Add Role
        </Button>
      </div>

      {/* Role List */}
      <div className="space-y-2">
        {filteredRoles.map((role) => (
          <Card key={role.id} className="shadow-sm border rounded-lg">
            <CardContent className="flex w-full items-center justify-between">
              {/* Info kiri */}
              <div>
                <p className="text-sm font-medium">{role.name}</p>
              </div>

              {/* Info kanan: date + menu */}
              <div className="flex items-center gap-4">
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  {role.createdAt.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleView(role)}>
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleUpdate(role)}>
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(role.id)}
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

        {filteredRoles.length === 0 && (
          <p className="text-sm text-muted-foreground">No roles found.</p>
        )}
      </div>
    </div>
  );
};

export default RoleList;
