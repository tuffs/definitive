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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex flex-col w-full border-l">
            <div className="" style={{ marginLeft: '1.555rem' }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

