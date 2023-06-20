import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
