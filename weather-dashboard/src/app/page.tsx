'use client';
import { Capriola } from 'next/font/google'
import Dashboard from "@/app/components/dashboard/dashboard";

const capriola = Capriola({
  weight: '400',
  subsets: ['latin'],
});
export default function Home() {
  return (
    <main className={capriola.className}>
      <Dashboard />
    </main>
  );
}
