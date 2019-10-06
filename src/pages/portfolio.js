import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/page-header/PageHeader';
import Project from '../components/project/Project';
import { graphql } from 'gatsby';

const Portfolio = ({ data }) => {
  console.log(data);
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
          const imgFluid = data.allFile.edges.find((edge) => {
            return edge.node.childImageSharp.fluid.originalName === node.frontmatter.screenshotURI;
          }).node.childImageSharp.fluid;
          return (
            <Project key={ node.id } title={ node.frontmatter.title } screenshot={ imgFluid }>
              { node.rawMarkdownBody }
            </Project>
          );
        })
      }
    </Layout>
  );
}

export default Portfolio;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          screenshotURI
        }
        rawMarkdownBody
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`