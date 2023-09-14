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
import AboutUs from './pages/AboutUs';
import ConditionOfUse from './pages/ConditionOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Gadgets from './pages/Gadgets';
import Advertisement from './pages/Advertisement';
import PageNotFound from './pages/PageNotFound';

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
        <Route path='/About Us' element={<AboutUs />} />
        <Route path='/Condition Of Use' element={<ConditionOfUse />} />
        <Route path='/Privacy Policy' element={<PrivacyPolicy />} />
        <Route path='/Gadgets' element={<Gadgets />} />
        <Route path='/Advertisement' element={<Advertisement />} />
        <Route path='*' element={<PageNotFound />} />
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
