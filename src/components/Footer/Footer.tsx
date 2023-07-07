import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <nav className="navigation footer__nav">
        <NavLink to="/" className="navigation__item">
          Home
        </NavLink>
        <a
          href="https://github.com/KateKitKat19"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github link"
          className="navigation__item footer__item"
        >
          GitHub
        </a>
        <NavLink to="/about" className="navigation__item footer__item">
          About me
        </NavLink>
        <NavLink to="/contacts" className="navigation__item footer__item">
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};
