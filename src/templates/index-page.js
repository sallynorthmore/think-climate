import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomePage from '../components/HomePage';

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;
  const page = data.page.frontmatter;
  const profiles = data.profiles.frontmatter.profiles;

  return <HomePage hero={page.hero} profiles={profiles} />;
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
  query {
    page: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
    profiles: markdownRemark(
      frontmatter: { templateKey: { eq: "about-page" } }
    ) {
      frontmatter {
        profiles {
          name
          description
          pledge
          bookLink
          book
          film
          filmLink
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
