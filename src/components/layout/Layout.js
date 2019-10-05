import React from 'react';
import Header from '../header/Header';
import '../../styles/typography.css';
import '../../styles/global.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      { children }
    </>
  );
}

export default Layout;