import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index.js';
import Content, { HTMLContent } from '../components/Content';
import Hero from '../components/Hero';
import * as S from './about-page.styles';

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
        <PageContent content={content} />

        <S.Team>
          {profiles.map(profile => (
            <S.TeamMate>
              <S.Image>
                <img src="http://lorempixel.com/400/400/people" />
              </S.Image>
              <S.Bio>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
                <h4>My pledge</h4>
                <p>{profile.pledge}</p>
                <p>
                  <strong>Read:</strong>
                  <a href={profile.bookLink}>{profile.book}</a>
                  <br />
                  <strong>Watch:</strong>{' '}
                  <a href={profile.filmLink}>{profile.film}</a>
                  <br />
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
        }
      }
    }
  }
`;
