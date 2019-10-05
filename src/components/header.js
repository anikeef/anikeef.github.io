import React from 'react';
import s from './header.module.scss';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.header__title}><Link to='/'>Аникеев</Link></h1>
      <ul className={s.header__links}>
        <li className={s.header__link}>Портфолио</li>
      </ul>
    </div>
  );
}

export default Header;