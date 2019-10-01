import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Banner from '../components/Banner';
import ParralaxHero from '../components/ParralaxHero';
import Subscribe from '../components/Subscribe';
import Event from '../components/Event';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
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
        if (!data.page) {
          return;
        }
        const page = data.page.frontmatter;
        const events = page.events;

        console.log(events);
        return (
          <Layout>
            <S.Home>
              <Banner />
              <ParralaxHero
                headline={page.hero.title}
                smallText={page.hero.date}
                image={page.hero.image}
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
