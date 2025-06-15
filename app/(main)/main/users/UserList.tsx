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
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    createdAt: "2024-06-01",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    createdAt: "2024-05-27",
    status: "inactive",
  },
];

const UserList = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const handleView = (user: any) => {
    console.log("View user:", user);
  };

  const handleUpdate = (user: any) => {
    console.log("Update user:", user);
  };

  const handleDelete = (id: number) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const handleAdd = () => {
    console.log("Add new user");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search + Add */}
      <div className="flex w-full items-center justify-between gap-2">
        <Input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAdd} className="whitespace-nowrap">
          Add User
        </Button>
      </div>

      {/* User List */}
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="shadow-sm border rounded-lg">
            <CardContent className="flex w-full items-center justify-between">
              {/* Info kiri */}
              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>

              {/* Info kanan: date + status + menu */}
              <div className="flex items-end gap-4">
                <div className="flex flex-col items-end">
                  <p className="text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <Badge
                    variant={
                      user.status === "inactive" ? "secondary" : "default"
                    }
                    className={`mt-1 text-xs`}
                  >
                    {user.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleView(user)}>
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleUpdate(user)}>
                      Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(user.id)}
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

        {filteredUsers.length === 0 && (
          <p className="text-sm text-muted-foreground">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
