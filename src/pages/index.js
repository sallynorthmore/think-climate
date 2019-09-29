import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Img from 'gatsby-image';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Subscribe from '../components/Subscribe';
import Event from '../components/Event';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
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
              <Hero
                smallText={page.hero.date}
                headline={page.hero.title}
              ></Hero>
            </ParallaxLayer>

            <ParallaxLayer offset={1} factor={2} speed={0.1}>
              <S.Main role="main">
                <S.Events>
                  <ol>
                    <li>
                      <Event
                        title="Screening: Al Gore’s Climate Crisis"
                        location="IBM London Southbank Client Center"
                        date="4 October 2019"
                        time="5:30pm - 8pm"
                      >
                        <p>
                          A bunch of us iX planet fanatics will watch Al Gore’s
                          full speech on the Climate Crisis, in which he tackles
                          the questions ‘Must we Change?’, ‘Can we Change?’ and
                          ‘Will we Change?’, providing a truthful and hopeful
                          take on how we’ll solve the mess we’re in.
                        </p>
                        <p>
                          Exclusive content provided by our iX CCO and IBM
                          Climate Evangelist @Jeremy.
                        </p>
                        <p>
                          It’s a long one, but feel free to stay how long you
                          wish. Bring some snacks and refreshments. See you
                          there!
                        </p>
                      </Event>
                    </li>
                    <li>
                      <Event
                        title="Climate & Cocktails"
                        location="IBM London Southbank Client Center"
                        date="20 November 2019"
                        time="18:30-20:30"
                      >
                        <p>More information</p>
                      </Event>
                    </li>
                  </ol>
                </S.Events>

                <Subscribe />
              </S.Main>
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </Layout>
      );
    }}
  />
);

export default IndexPage;
