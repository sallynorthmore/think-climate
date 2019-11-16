import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomePage from '../components/HomePage';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <HomePage hero={frontmatter.hero} title={frontmatter.title} />;
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title

        hero {
          title
          smalltext
          #  color
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
