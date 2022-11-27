'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <main className="mx-auto max-w-5xl p-4">{children}</main>
    </SessionProvider>
  );
}
