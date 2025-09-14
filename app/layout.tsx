import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vocab App',
  description: 'Vocabulary Learning App',
};

export default function RootLayout({
  children
}: ReadOnly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
        </div>
      </body>
    </html>
  );
}

