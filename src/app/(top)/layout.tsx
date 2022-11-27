import { Header } from './header';

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl p-4">{children}</main>
    </>
  );
}
