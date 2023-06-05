import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
