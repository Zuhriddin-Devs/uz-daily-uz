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
import Detail from './pages/Detail';
import PageNotFound from './pages/PageNotFound';

import './css/loader.css';

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
        <Route path='/Condition of Use' element={<ConditionOfUse />} />
        <Route path='/Privacy Policy' element={<PrivacyPolicy />} />
        <Route path='/Gadgets' element={<Gadgets />} />
        <Route path='/Advertisement' element={<Advertisement />} />
        <Route path='/Uzbekistan/:id' element={<Detail />} />
        <Route path='/Iqtisod/:id' element={<Detail />} />
        <Route path='/Moliya/:id' element={<Detail />} />
        <Route path='/Texnologiyalar/:id' element={<Detail />} />
        <Route path='/Madaniyat/:id' element={<Detail />} />
        <Route path='/Sport/:id' element={<Detail />} />
        <Route path='/Turizm/:id' element={<Detail />} />
        <Route path='/About Us/:id' element={<Detail />} />
        <Route path='/Condition of Use/:id' element={<Detail />} />
        <Route path='/Privacy Policy/:id' element={<Detail />} />
        <Route path='/Gadgets/:id' element={<Detail />} />
        <Route path='/Advertising/:id' element={<Detail />} />
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
