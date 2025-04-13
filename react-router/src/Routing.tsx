import React from 'react';
import { Github, Header, Home, User } from './components';
import { Route, Routes } from 'react-router';
import Footer from './components/global/Footer';

export default function Routing(): React.JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:userId' element={<User />} />
        <Route path='/github' element={<Github />} />
      </Routes>
      <Footer />
    </>
  );
}
