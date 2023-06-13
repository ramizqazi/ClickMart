'use client';
import { Suspense } from 'react';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { QueryClientProvider } from 'react-query';

import Header from '@/components/Header';
import { client as queryClient } from '../../config/react-query';

import './globals.css';
import './extraSlider.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthScreen = pathname.includes('/auth');

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}>
          {!isAuthScreen && <Header />}
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={''}>{children}</Suspense>
          </QueryClientProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
