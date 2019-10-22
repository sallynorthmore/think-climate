import React from 'react';
import PropTypes from 'prop-types';
// import useSiteMetadata from './SiteMetadata';
// import { withPrefix } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from '../StyleGuide/global';
import Banner from '../Banner';

import * as S from './styles';

const Layout = ({ children }) => {
  // const { title, description } = useSiteMetadata();

  console.log(GlobalTheme);

  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <S.Layout>
          <GlobalStyle />
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
