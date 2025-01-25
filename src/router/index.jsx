import  React from 'react';
import {Routes, Route } from 'react-router';
import AppLayout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import AppNoteFound from '../components/NoteFound';


const CustomNavbar = () => {

  return (
      <Routes>
        <Route path="/" element={<AppLayout><Home /></AppLayout>} />
        <Route path="/about" element={<AppLayout><About /></AppLayout>} />
        <Route path="/services" element={<AppLayout><Services /></AppLayout>} />
        <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />
        <Route path="*" element={<AppNoteFound />}/>
      </Routes>
  );
};

export default CustomNavbar;
