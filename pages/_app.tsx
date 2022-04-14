import Header from '@/components/Header';
import { AuthProvider } from '@/contexts/auth';

import { AppProps } from 'next/app';
// import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-full">
        <AuthProvider>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              <div className="w-full">
                <Header />
                <main className="-mt-24 pb-8">
                  {/* SessionProvider part of NextAuth */}
                  {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}

                  <Component {...pageProps} />
                  {/* </SessionProvider> */}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </AuthProvider>
      </div>
    </>
  );
}
