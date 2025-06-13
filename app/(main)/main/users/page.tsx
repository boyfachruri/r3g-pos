"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const Page = () => {
  const handleView = (user: any) => {
    console.log("View user:", user);
    // Arahkan ke halaman detail atau buka modal
  };

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <Card key={user.id} className="shadow-sm border rounded-lg">
          <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-3">
            <div>
              <p className="text-sm font-medium leading-tight">{user.name}</p>
              <p className="text-xs text-muted-foreground leading-tight">
                {user.email}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleView(user)}
              className="mt-1 sm:mt-0"
            >
              View
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
