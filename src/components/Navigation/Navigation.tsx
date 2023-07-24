import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
export const Navigation: FC = () => {
  return (
    <nav className=" flex justify-center md:justify-end space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base lg:text-lg text-sky-700 dark:text-sky-200 font-bold uppercase ">
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
  );
};
