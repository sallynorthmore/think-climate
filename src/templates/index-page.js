import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/index.js';
import ParralaxHero from '../components/ParralaxHero';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import * as S from '../components/Home/styles';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({ title, hero }) => (
  <S.Home>
    <ParralaxHero
      headline={hero.title}
      smallText={hero.smalltext}
      image={hero.image}
    ></ParralaxHero>
    <S.Main role="main">
      <BlogRoll />
      {/* <Link to="/blog">Read more</Link> */}
      {/* <Link to="/contact">Contact us</Link> */}

      <Subscribe />
    </S.Main>
    <Footer />
  </S.Home>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string,
    smallText: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate hero={frontmatter.hero} title={frontmatter.title} />
    </Layout>
  );
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
