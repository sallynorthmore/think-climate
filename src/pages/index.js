import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Img from 'gatsby-image';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Banner from '../components/Banner';
import Layout from '../components/Layout';
import * as S from '../components/Page/styles';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        page: markdownRemark(
          frontmatter: { templateKey: { eq: "home-page" } }
        ) {
          frontmatter {
            title
            hero {
              color
              title
              date
              image {
                childImageSharp {
                  fluid(quality: 85, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const page = data.page.frontmatter;

      if (!page) {
        return;
      }

      console.log(page.hero.image);
      return (
        <Layout>
          <Parallax pages={2} scrolling>
            <ParallaxLayer offset={0} factor={1} speed={0.2}>
              {page.hero.image && (
                <S.Earth>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: page.hero.image,
                      alt: `${page.hero.title}`
                    }}
                  />
                </S.Earth>
              )}
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={1} speed={-0.1}>
              <Banner />
              <S.Hero>
                <S.HeroInner>
                  <p>{page.hero.date}</p>
                  <h1>{page.hero.title}</h1>
                </S.HeroInner>
              </S.Hero>
            </ParallaxLayer>

            <ParallaxLayer offset={1} factor={1} speed={0.1}>
              <S.Content role="main">
                <S.ContentInner>
                  <h2>Register</h2>
                  <p>
                    Register your interest{' '}
                    <a
                      href="https://forms.gle/CZp4VcJ5G8VW3wEC7"
                      title="Register form"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{' '}
                    to attend our event, <br />
                    and we will be in touch with more information shortly.
                  </p>
                </S.ContentInner>
              </S.Content>
            </ParallaxLayer>
          </Parallax>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
