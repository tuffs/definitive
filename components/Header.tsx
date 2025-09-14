import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-background px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Vocab App</h1>
      <nav className="space-x-4">
        <Link href="/"><Button variant="ghost">Home</Button></Link>
        <Link href="/profile"><Button variant="ghost">Profile</Button></Link>
      </nav>
    </header>
  );
};
