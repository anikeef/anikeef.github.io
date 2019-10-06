import React from 'react';
import Layout from '../components/layout/Layout';
import s from './styles/index.module.scss';
import { Link } from 'gatsby';

const Index = () => {
  return (
    <Layout>
      <div className={s.home}>
        <Link to='/portfolio' className={s.home__greeting}>Жми сюда</Link>
      </div>
    </Layout>
  );
}

export default Index;