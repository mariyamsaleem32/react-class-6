import { React, useState } from 'react';
import {Routes, Route, Navigate } from 'react-router';
import AppLayout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import AppNoteFound from '../components/NoteFound';
import Login from '../pages/Login';

const CustomNavbar = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Routes>
        {/* Redirect to Home if logged in, else go to Login */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Home page route */}
        <Route
          path="/home"
          element={isLoggedIn ? <AppLayout><Home /></AppLayout> : <Navigate to="/" />}
        />

        {/* About page route */}
        <Route
          path="/about"
          element={isLoggedIn ? <AppLayout><About /></AppLayout> : <Navigate to="/" />}
        />

        {/* Services page route */}
        <Route
          path="/services"
          element={isLoggedIn ? <AppLayout><Services /></AppLayout> : <Navigate to="/" />}
        />

        {/* Contact page route */}
        <Route
          path="/contact"
          element={isLoggedIn ? <AppLayout><Contact /></AppLayout> : <Navigate to="/" />}
        />

        {/* 404 page route */}
        <Route path="*" element={<AppNoteFound />}/>
      </Routes>

  );
};

export default CustomNavbar;
