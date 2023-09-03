import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Uzbekistan from './pages/Uzbekistan';
import Iqtisod from './pages/Iqtisod';
import Moliya from './pages/Moliya';
import Texnologiyalar from './pages/Texnologiyalar';
import Madaniyat from './pages/Madaniyat';
import Sport from './pages/Sport';
import Turizm from './pages/Turizm';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<Uzbekistan />} />
        <Route path='/Iqtisod' element={<Iqtisod />} />
        <Route path='/Moliya' element={<Moliya />} />
        <Route path='/Texnologiyalar' element={<Texnologiyalar />} />
        <Route path='/Madaniyat' element={<Madaniyat />} />
        <Route path='/Sport' element={<Sport />} />
        <Route path='/Turizm' element={<Turizm />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
