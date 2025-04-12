import React from 'react';
import { Header, Home } from './components';
import { Route, Routes } from 'react-router';
import Footer from './components/global/Footer';

export default function Routing(): React.JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
