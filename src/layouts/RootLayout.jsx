// RootLayout.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className='w-full bg-gray-200 py-12 mt-32 lg:mt-16'>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default RootLayout;
