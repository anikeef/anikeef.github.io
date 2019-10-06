import React from 'react';
import s from './Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <div className={s.footer}>
      { children }
    </div>
  );
}

export default Footer;