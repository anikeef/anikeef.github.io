import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/page-header/PageHeader';
import Project from '../components/project/Project';
import { graphql } from 'gatsby';
import Footer from '../components/footer/Footer';
import githubLogo from '../images/github-white.png';
import footerStyles from '../components/footer/Footer.module.scss';

const extractImgData = (mode, name, data) => {
  return data.allFile.nodes.find((node) => {
    return node.childImageSharp[mode].originalName === name;
  }).childImageSharp[mode];
}

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <PageHeader title='Портфолио' >
        Здесь вы найдете несколько интересных работ и несколько менее интересных. 
        Логотипы под скриншотами отображают основные технологии, использованные в 
        разработке каждого конкретного проекта и не означают никакого сотрудничества с 
        представителями этих товарных знаков (На всякий случай)  
      </PageHeader>
      { 
        data.allMarkdownRemark.nodes.map((node) => {
          const imgFluid = extractImgData('fluid', node.frontmatter.screenshot, data);
          const logosFixed = extractImgData('fixed', node.frontmatter.logos, data);
          return (
            <Project 
            key={ node.frontmatter.id } 
            title={ node.frontmatter.title } 
            screenshot={ imgFluid } 
            logos={ logosFixed }
            siteLink={ node.frontmatter.siteLink }
            repoLink={ node.frontmatter.repoLink }>
              { node.rawMarkdownBody }
            </Project>
          );
        })
      }
      <Footer>
        Остальное на <a href="https://github.com/anikeef"><img src={githubLogo} className={footerStyles.footer__logo} alt="Github logo" /></a>
      </Footer>
    </Layout>
  );
}

export default Portfolio;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___id}) {
      nodes {
        frontmatter {
          id
          logos
          repoLink
          screenshot
          siteLink
          title
        }
        rawMarkdownBody
      }
    }

    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1000) {
            originalName
            ...GatsbyImageSharpFluid
          }
          fixed(height: 35) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`