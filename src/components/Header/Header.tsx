import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <a
          href="https://github.com/KateKitKat19"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github link"
        >
          GitHub
        </a>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
};
