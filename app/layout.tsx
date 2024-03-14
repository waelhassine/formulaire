import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Provider from '@/components/Provider';
import Sidebar from '@/components/sidebar';

const inter = Manrope({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'AGS ASSURANCE',
  description: 'Des experts à votre disposition pour vous conseiller au mieux.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
