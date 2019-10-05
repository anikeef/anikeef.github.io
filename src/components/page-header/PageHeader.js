import React from 'react';
import s from './PageHeader.module.scss';

const PageHeader = ({ title, children }) => {
  return (
    <div className={s.pageHeader}>
      <h2 className={s.pageHeader__title}>{ title }</h2>
      <div className={s.pageHeader__description}>{ children }</div>
    </div>
  );
}

export default PageHeader;