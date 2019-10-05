import React from 'react';
import s from './Header.module.scss';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.header__title}><Link to='/' className={s.header__link}>Аникеев</Link></h1>
      <ul className={s.header__nav}>
        <li className={s.header__navItem}><Link to='/portfolio' className={s.header__link}>Портфолио</Link></li>
      </ul>
    </div>
  );
}

export default Header;