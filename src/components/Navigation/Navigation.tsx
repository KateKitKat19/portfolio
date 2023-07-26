import { FC } from 'react';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navigation: FC = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <ul className=" hidden md:flex justify-center md:justify-end space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base lg:text-lg text-sky-700 dark:text-sky-200 font-bold uppercase ">
        <li>
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={500} className="nav-link">
            Contacts
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/KateKitKat19"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github link"
            className="nav-link"
          >
            GitHub
          </a>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <button
            type="button"
            onClick={handleClick}
            className="text-sky-900 dark:text-sky-200 hover:text-sky-950 dark:hover:text-sky-300 focus:outline-none rounded-lg p-2 sm:p-3 md:p-4"
          >
            <FaBars />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleClick}
            className="text-sky-900 dark:text-sky-200 hover:text-sky-950 dark:hover:text-sky-300 focus:outline-none rounded-lg p-2 sm:p-3 md:p-4"
          >
            <FaTimes />
          </button>
        )}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen dark:bg-[#0a192f] bg-slate-100 text-sky-700 dark:text-sky-200 font-bold uppercase flex flex-col gap-3 justify-center items-center'
        }
      >
        <li className="py-4 text-xl">
          <Link to="home" onClick={handleClick} smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>

        <li className="py-4 text-xl">
          <Link to="about" onClick={handleClick} smooth={true} duration={500} className="nav-link">
            About me
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link to="skills" onClick={handleClick} smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link to="works" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li className="py-4 text-xl">
          <Link
            to="contacts"
            onClick={handleClick}
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Contacts
          </Link>
        </li>
        <li className="py-4 text-xl">
          <a
            href="https://github.com/KateKitKat19"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Github link"
            className="nav-link"
          >
            GitHub
          </a>
        </li>
      </ul>
    </>
  );
};
