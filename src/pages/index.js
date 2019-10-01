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
            events {
              title
              location
              time
              date
              body
              image {
                childImageSharp {
                  fluid(quality: 85, maxWidth: 720) {
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

      const events = page.events;

      console.log(events);
      return (
        <Layout>
          <Parallax pages={3} scrolling>
            <ParallaxLayer offset={0} factor={1} speed={0.05}>
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
            <ParallaxLayer offset={0} factor={1} speed={-0.03}>
              <Banner />
              <Hero
                smallText={page.hero.date}
                headline={page.hero.title}
              ></Hero>
            </ParallaxLayer>

            <ParallaxLayer offset={1} factor={2} speed={0.1}>
              <S.Main role="main">
                <S.Events>
                  <h2>Upcoming events</h2>
                  <ol>
                    {events.map((event, i) => (
                      <li key={i}>
                        <Event
                          title={event.title}
                          location={event.location}
                          date={event.date}
                          time={event.time}
                          image={event.image}
                        >
                          {event.body}
                        </Event>
                      </li>
                    ))}
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
