import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div className="px-3">
      <button type="button" onClick={handleThemeChange}>
        {' '}
        Toggle mode
      </button>
    </div>
  );
};
