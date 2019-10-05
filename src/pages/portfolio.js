import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/page-header/PageHeader';

const Portfolio = () => {
  return (
    <Layout>
      <PageHeader title='Портфолио' >
        Здесь вы найдете несколько интересных работ и несколько менее интересных. 
        Логотипы под скриншотами отображают основные технологии, использованные в 
        разработке каждого конкретного проекта и не означают никакого сотрудничества с 
        представителями этих товарных знаков (На всякий случай)  
      </PageHeader>
    </Layout>
  );
}

export default Portfolio;