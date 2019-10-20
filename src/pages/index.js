import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Banner from '../components/Banner';
import Event from '../components/Event';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import ParralaxHero from '../components/ParralaxHero';
import SEO from '../components/SEO/index';
import Subscribe from '../components/Subscribe';
import * as S from '../components/Page/styles';

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          page: markdownRemark(
            frontmatter: { templateKey: { eq: "home-page" } }
          ) {
            frontmatter {
              title
              hero {
                background
                title
                smalltext
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
        if (!data.page) {
          return;
        }
        const page = data.page.frontmatter;
        const events = page.events;
        const hero = page.hero;

        return (
          <Layout>
            <SEO
              title="ThinkClimate"
              description={hero.title}
              image="/images/uploads/earth-rise.jpg"
            />
            <S.Home>
              <Banner />
              <ParralaxHero
                headline={hero.title}
                smallText={hero.smalltext}
                image={hero.image}
              ></ParralaxHero>
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
                          isImageRight={i % 2 !== 0}
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
            </S.Home>
          </Layout>
        );
      }}
    />
  );
};

export default IndexPage;
