import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme-context';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

export const Header = () => {
  return (
    <header className="py-7 w-full ">
      <ThemeSwitch></ThemeSwitch>

      <nav className=" flex justify-center md:justify-end space-x-4 text-sm md:text-base lg:text-lg text-sky-700 dark:text-sky-200 font-bold uppercase ">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <a
          href="https://github.com/KateKitKat19"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github link"
          className="nav-link"
        >
          GitHub
        </a>
        <NavLink to="/about" className="nav-link">
          About me
        </NavLink>
        <NavLink to="/contacts" className="nav-link">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
