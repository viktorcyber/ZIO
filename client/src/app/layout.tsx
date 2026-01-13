import type { Metadata } from 'next';
import { Outfit, Ovo } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import '@/styles/globals.css';
import Header from '@/components/shared/header';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const ovo = Ovo({
  variable: '--font-ovo',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'ZIO 🫠',
  description: 'Passionate about building real-world apps 🤖',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.variable} ${ovo.variable} antialiased`}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
