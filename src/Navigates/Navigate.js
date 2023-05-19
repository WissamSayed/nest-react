import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from '../Screens/Users';
import Home from '../Screens/Home';
import Footer from './Footer';
import Header from './Header';

const Navigate = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigate;
