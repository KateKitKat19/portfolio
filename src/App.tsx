import React, { useState, useEffect } from 'react';
import { ThemeContext } from './contexts/theme-context';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Skills } from './components/Skills/Skills';
import { Slideshow } from './components/Slideshow/Slideshow';

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());
  console.log('🚀 ~ file: App.tsx:19 ~ App ~ theme:', theme);

  useEffect(() => {
    theme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <Skills></Skills>
      <Slideshow></Slideshow>
    </ThemeContext.Provider>
  );
}

export default App;
