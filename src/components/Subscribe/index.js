import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import * as S from './styles';

const Subscribe = () => (
  <StaticQuery
    query={graphql`
      query {
        page: markdownRemark(
          frontmatter: { templateKey: { eq: "subscribe" } }
        ) {
          frontmatter {
            title
            body
          }
        }
      }
    `}
    render={data => {
      const subscribe = data.page.frontmatter;

      if (!subscribe) {
        return;
      }

      return (
        <S.Subscribe>
          <h2>{subscribe.title}</h2>
          <ReactMarkdown source={subscribe.body} escapeHtml={false} />
        </S.Subscribe>
      );
    }}
  />
);

export default Subscribe;
