import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='w-full bg-gray-200 py-12 mt-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
