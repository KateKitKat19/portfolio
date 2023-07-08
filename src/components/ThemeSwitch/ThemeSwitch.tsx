import { FC, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import { TbMoonStars, TbSun } from 'react-icons/tb';

export const ThemeSwitch: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <div className="">
      <button
        type="button"
        onClick={handleThemeChange}
        className="text-sky-900 dark:text-sky-200 hover:text-sky-950 dark:hover:text-sky-300 focus:outline-none rounded-lg p-2 sm:p-3 md:p-4"
      >
        <TbMoonStars className="w-4 h-4 dark:hidden sm:w-5 sm:h-5 md:w-6 md:h-6"></TbMoonStars>
        <TbSun className="w-4 h-4 hidden dark:block sm:w-5 sm:h-5 md:w-6 md:h-6"></TbSun>
      </button>
    </div>
  );
};
