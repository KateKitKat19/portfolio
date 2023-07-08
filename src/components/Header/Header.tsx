import { FC } from 'react';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Navigation } from '../Navigation/Navigation';

export const Header: FC = () => {
  return (
    <header className="py-7 w-full flex justify-between items-center">
      <Navigation></Navigation>
      <ThemeSwitch></ThemeSwitch>
    </header>
  );
};
