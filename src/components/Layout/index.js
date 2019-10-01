import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from '../StyleGuide/global';

import * as S from './styles';

const Layout = props => {
  return (
    <StaticQuery
      query={graphql`
        query SiteQuery {
          global: markdownRemark(
            frontmatter: { templateKey: { eq: "global" } }
          ) {
            frontmatter {
              email
              # menuLinks {
              #   text
              #   url
              #   items {
              #     text
              #     url
              #   }
              # }
            }
          }
          contact: markdownRemark(
            frontmatter: { templateKey: { eq: "contactform" } }
          ) {
            frontmatter {
              title
              body
              success
            }
          }
        }
      `}
      render={data => {
        // const global = data.global.frontmatter;
        // const contact = data.contact.frontmatter;

        return (
          <>
            <ThemeProvider theme={GlobalTheme}>
              <S.Layout>
                <GlobalStyle />

                {props.children}
              </S.Layout>
            </ThemeProvider>
          </>
        );
      }}
    />
  );
};

// Layout.defaultProps = defaultProps;

export default Layout;
