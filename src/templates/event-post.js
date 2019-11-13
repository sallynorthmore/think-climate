import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
// import { withPrefix} form 'gatsby';
import Layout from '../components/Layout/index.js';
import Content, { HTMLContent } from '../components/Content';
import VideoHero from '../components/VideoHero';
import * as S from './event-post.styles';

export const EventPostTemplate = ({
  content,
  contentComponent,
  title,
  location,
  date,
  time,
  ticketsLink,
  heroImage,
  heroVideo
}) => {
  const PostContent = contentComponent || Content;

  return (
    <S.EventPostTemplate>
      <VideoHero
        video={heroVideo}
        image={heroImage}
        isEvent
        headline={title}
      ></VideoHero>
      <S.Main>
        <S.Content>
          <PostContent content={content} />
        </S.Content>

        <S.Aside>
          <Content>
            <h2>Event details</h2>
            {location && (
              <p>
                <strong>Location</strong>: {location}
              </p>
            )}
            {date && (
              <p>
                <strong>Date</strong>: {date}
              </p>
            )}
            {time && (
              <p>
                <strong>Time</strong>: {time}
              </p>
            )}
            {ticketsLink && (
              <p>
                <strong>Tickets</strong>:{' '}
                <a href={ticketsLink} target="_blank">
                  Get tickets
                </a>
              </p>
            )}
          </Content>
        </S.Aside>
        {/* tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul>
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
              ) : null */}
      </S.Main>
    </S.EventPostTemplate>
  );
};

EventPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const EventPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        description={`${post.frontmatter.description}`}
        title={`Event: ${post.frontmatter.title}`}
        titleTemplate="%s | Events"
        lang="en"
        image={post.frontmatter.shareImage.childImageSharp.resolutions.src}
      />
      <EventPostTemplate
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
    </Layout>
  );
};

EventPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventPost;

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
