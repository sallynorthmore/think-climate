import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Content from '../Content';
import * as S from './styles';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <S.BlogRoll>
        <ol>
          {posts &&
            posts.map(({ node: post }, i) => (
              <li key={post.id}>
                <S.Post isImageRight={i % 2 !== 0}>
                  {post.frontmatter.featuredimage ? (
                    <S.Image className="image">
                      <PreviewCompatibleImage
                        className="eventImage"
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </S.Image>
                  ) : null}
                  <S.Content>
                    <h3 className="title">
                      {post.frontmatter.title}

                      {/* <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>{post.frontmatter.date} */}
                    </h3>

                    <Content content={post.excerpt}></Content>
                    {/*<Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>*/}
                    <S.Footer className="footer">
                      {post.frontmatter.eventDate && (
                        <li>{post.frontmatter.eventDate}</li>
                      )}
                      {post.frontmatter.eventTime && (
                        <li>{post.frontmatter.eventTime}</li>
                      )}
                      {post.frontmatter.location && (
                        <li>{post.frontmatter.location}</li>
                      )}
                    </S.Footer>
                  </S.Content>
                </S.Post>
              </li>
            ))}
        </ol>
      </S.BlogRoll>
    );
  }
}

BlogRoll.props = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

// export default BlogRoll;

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
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
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
