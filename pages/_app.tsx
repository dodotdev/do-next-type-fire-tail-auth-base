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
          <Header />
          <main className="-mt-24 pb-8">
            {/* SessionProvider part of NextAuth */}
            {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}
            <Component {...pageProps} />
            {/* </SessionProvider> */}
          </main>
        </AuthProvider>
        <Footer />
        {/* <footer>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
              <span className="block sm:inline">&copy; 2022 Do Dev LLC.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}
