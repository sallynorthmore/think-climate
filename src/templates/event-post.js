import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/SEO';
import { graphql, withPrefix } from 'gatsby';
import Layout from '../components/Layout/index.js';
import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import * as S from './event-post.styles';

export const EventPostTemplate = ({ content, contentComponent, title }) => {
  const PostContent = contentComponent || Content;

  return (
    <S.EventPostTemplate>
      <Hero isEvent headline={title} smallText="Event"></Hero>
      <S.Main>
        <PostContent content={content} />

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
      <Subscribe />
      <Footer />
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
        title={`${post.frontmatter.title}`}
        titleTemplate="%s | Events"
        lang="en"
        image={`${withPrefix('/')}img/og-image.jpg`}
      />
      <EventPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
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
      }
    }
  }
`;
