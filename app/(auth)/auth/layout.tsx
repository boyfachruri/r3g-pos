import React from "react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "R3g Software",
  description: "R3g Software",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex items-center justify-center gap-2">
          <Avatar className="h-12 w-12 rounded-lg grayscale">
            <AvatarImage src="/r3g.png" alt="R3g" />
          </Avatar>
          <span className="text-xl font-semibold">R3g Software</span>
        </CardHeader>

        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
