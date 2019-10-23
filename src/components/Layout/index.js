import React from 'react';
import PropTypes from 'prop-types';
// import useSiteMetadata from './SiteMetadata';
// import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from '../StyleGuide/global';
import Banner from '../Banner';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <S.Layout>
          <GlobalStyle />
          <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content="/" />
            <meta
              property="og:image"
              content={`${withPrefix('/')}img/og-image.jpg`}
            />
          </Helmet>
          <Banner />
          <div>{children}</div>
        </S.Layout>
      </ThemeProvider>
    </>
  );
};

Layout.defaultProps = {};

Layout.props = {
  children: PropTypes.node
};

export default Layout;
