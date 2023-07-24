import { FC } from 'react';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Navigation } from '../Navigation/Navigation';

export const Header: FC = () => {
  return (
    <header className="w-full h-20 fixed max-w-[1000px] flex justify-between items-center px-4 dark:bg-[#0a192f] bg-slate-100 dark:text-gray-300">
      <Navigation></Navigation>
      <ThemeSwitch></ThemeSwitch>
    </header>
  );
};
