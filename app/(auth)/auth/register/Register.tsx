'use client';

import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
    console.log({ name, email, password });
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nama kamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="grid w-full items-center gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-primary cursor-pointer">
        Daftar
      </Button>

      <CardDescription className="text-center mt-4 text-sm">
        Sudah punya akun?{' '}
        <Link href="/auth/login" className="underline text-primary">
          Masuk sekarang
        </Link>
      </CardDescription>
    </form>
  );
}
