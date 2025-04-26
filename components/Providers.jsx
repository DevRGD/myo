'use client';

import store from '@/store/store';
import { Provider } from 'react-redux';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SessionProvider, useSession } from 'next-auth/react';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <SessionProvider session={null}>
        <AuthContent>{children}</AuthContent>
      </SessionProvider>
    </Provider>
  );
}

function AuthContent({ children }) {
  const { status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl text-gray-500 font-serif font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-grow w-full flex justify-center items-center">{children}</main>
      <Footer />
    </>
  );
}
