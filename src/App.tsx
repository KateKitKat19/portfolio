import React, { lazy, useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { ThemeContext } from './contexts/theme-context';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());
  console.log('🚀 ~ file: App.tsx:14 ~ App ~ theme:', theme);

  useEffect(() => {
    theme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
