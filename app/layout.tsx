import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const inter = Manrope({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'AGS ASSURANCE',
  description: 'Des experts à votre disposition pour vous conseiller au mieux.',
  icons: {
    icon: '/logo.png', // /public path
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={inter.className}>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
