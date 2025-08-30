import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { AIAssistant } from '@/components/AIAssistant';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { SkipLink } from '@/components/ui/skip-link';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'VisionPulsePoint - AI-Powered Maternal Care',
  description: 'Next-generation maternal healthcare platform for rural South Africa',
  keywords: 'maternal healthcare, AI, South Africa, pregnancy care, blockchain health records',
  authors: [{ name: 'VisionPulsePoint Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white overflow-x-hidden`}>
        <SkipLink />
        <Navigation />
        <ErrorBoundary>
          <main id="main-content">{children}</main>
          <AIAssistant />
        </ErrorBoundary>
      </body>
    </html>
  );
}