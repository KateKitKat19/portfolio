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
          className="navigation__item"
        >
          GitHub
        </a>
        <NavLink to="/about" className="navigation__item">
          About me
        </NavLink>
        <NavLink to="/contacts" className="navigation__item">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
