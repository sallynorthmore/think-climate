import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import EventPage from '../components/EventPage';
import { HTMLContent } from '../components/Content';

const EventPostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <>
      <SEO
        description={`${post.frontmatter.description}`}
        title={`Event: ${post.frontmatter.title}`}
        titleTemplate="%s | Events"
        lang="en"
        image={post.frontmatter.shareImage.childImageSharp.resolutions.src}
      />
      <EventPage
        heroImage={post.frontmatter.heroImage}
        heroVideo={post.frontmatter.heroVideo}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.eventDate}
        location={post.frontmatter.location}
        time={post.frontmatter.eventTime}
        ticketsLink={post.frontmatter.ticketsLink}
      />
    </>
  );
};

EventPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventPostTemplate;

export const pageQuery = graphql`
  query EventPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        location
        eventDate
        eventTime
        ticketsLink
        shareImage {
          childImageSharp {
            resolutions(width: 600) {
              src
              srcSet
            }
          }
        }
        heroImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        #heroVideo
      }
    }
  }
`;
