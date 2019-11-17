import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import AboutPage from '../components/AboutPage';

const AboutPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPage
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      profiles={post.frontmatter.profiles}
    />
  );
};

AboutPageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPageTemplate;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
