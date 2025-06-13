import React from "react";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
        <CardHeader className="flex justify-center">
          <Image src="/r3g-pos.png" alt="image" width={125} height={125} />
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
