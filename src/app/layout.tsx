import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import { Poppins } from 'next/font/google';
import 'lenis/dist/lenis.css';
import SmoothScroller from '@/components/common/smooth-scroll';
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import AOSinit from '@/app/aos';
import Head from './head';

const logo =
  'https://d1umq5vluhycnq.cloudfront.net/assets/images/logos/ecocrew-logo1.png';
// import Script from 'next/script';
// import Tracker from './google-analytics/tracker';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'Ecocrew',
  description:
    'Made recycling easy and rewarding by offering doorstep pickup of recyclables',
  keywords: [
    'sustainability',
    'eco friendly',
    'nature',
    'bangalore',
    'recycle',
    'earn cash',
  ],
};
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <Head />
      <body className={`antialiased ${poppins.className} ${poppins.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WKF43CFJ`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>

        <div className="relative">
          <Suspense
            fallback={
              <div className="flex h-screen w-full items-center justify-center">
                <img
                  src={
                    typeof logo === 'string'
                      ? logo
                      : (logo as { src: string })?.src
                  }
                  alt="ecocrew logo"
                  className="h-12 w-12 animate-pulse md:h-20 md:w-20"
                  width={48}
                  height={48}
                />
              </div>
            }>
            <AOSinit />
            <Navbar />
            <SmoothScroller>{children}</SmoothScroller>
            <Toaster />
            <Footer />
          </Suspense>
        </div>

        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
        </Script> */}

        {/* <Tracker /> */}
      </body>
    </html>
  );
}
