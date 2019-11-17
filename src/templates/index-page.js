import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomePage from '../components/HomePage';

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;
  const page = data.page.frontmatter;
  const profiles = data.profiles.frontmatter.profiles;
  const events = data.events;
  const { edges: eventPosts } = events;

  return <HomePage hero={page.hero} profiles={profiles} events={eventPosts} />;
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
              fluid(maxWidth: 2048, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    events: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "event-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            location
            eventDate
            eventTime
            description
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
