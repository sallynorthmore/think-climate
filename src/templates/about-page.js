import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index.js';
import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import * as S from './about-page.styles';
import showdown from 'showdown';

const converter = new showdown.Converter();

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  profiles
}) => {
  const PageContent = contentComponent || Content;

  return (
    <S.AboutPage>
      <Hero isEvent headline={title}></Hero>
      <S.Main>
        <S.Team>
          <h2>Our Team</h2>
          {profiles.map((profile, i) => (
            <S.TeamMate isImageRight={i % 2 !== 0}>
              <S.Image>
                {profile.image && (
                  <PreviewCompatibleImage
                    className="eventImage"
                    imageInfo={{
                      image: profile.image,
                      alt: `Profile image of ${profile.name}`
                    }}
                  />
                )}
              </S.Image>
              <S.Bio>
                <h3>{profile.name}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(profile.description)
                  }}
                ></div>
                {profile.pledge && (
                  <div>
                    <h4>My pledge</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: converter.makeHtml(profile.pledge)
                      }}
                    ></div>
                  </div>
                )}

                <p>
                  {profile.book && (
                    <div>
                      <strong>Read:</strong>{' '}
                      <a href={profile.bookLink}>{profile.book}</a>
                    </div>
                  )}
                  {profile.film && (
                    <div>
                      <strong>Watch:</strong>{' '}
                      <a href={profile.filmLink}>{profile.film}</a>
                    </div>
                  )}
                </p>
              </S.Bio>
            </S.TeamMate>
          ))}
        </S.Team>
      </S.Main>
    </S.AboutPage>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        profiles={post.frontmatter.profiles}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

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
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
