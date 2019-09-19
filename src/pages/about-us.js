import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/Layout/index';

const AboutUsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        page: markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
          frontmatter {
            title
            hero {
              color
              title
              intro
              # image {
              #   childImageSharp {
              #     fluid(quality: 85, maxWidth: 2000) {
              #       ...GatsbyImageSharpFluid
              #     }
              #   }
              # }
            }
          }
        }
      }
    `}
    render={data => {
      const page = data.page.frontmatter;

      if (!page) {
        return;
      }
      return (
        <Layout hero={page.hero} noSpace={true}>
          About us
        </Layout>
      );
    }}
  />
);

export default AboutUsPage;
