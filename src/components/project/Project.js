import React from 'react';
import s from './Project.module.scss';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import githubLogo from '../../images/github.png';

const Project = ({ title, children, screenshot, repoLink, siteLink }) => {
  console.log(screenshot);
  return (
    <div className={s.project}>
      <div className={s.project__content}>
        <h3 className={s.project__title}>{ title }</h3>
        <div className={s.project__description}>
          <ReactMarkdown>{ children }</ReactMarkdown>
        </div>
        <div className={s.project__links}>
          <a className={s.project__link} href={ repoLink }><img src={githubLogo} className={s.project__githubLink} /></a>
          <a className={s.project__link} href={ siteLink }>Перейти на сайт</a>
        </div>
      </div>
      <div className={s.project__presentation}>
        <div className={s.project__screenshot}>
          <Img fluid={ screenshot } alt="Gatsby Docs are awesome" />
        </div>
        <img className={s.project__logos} src='/write-logos.png'></img>
      </div>
    </div>
  );
}

export default Project;