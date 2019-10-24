import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from '../StyleGuide/global';
import Banner from '../Banner';
import Footer from '../Footer';
import Subscribe from '../Subscribe';

import * as S from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <S.Layout>
          <GlobalStyle />
          <Banner />
          <div>{children}</div>
          <Subscribe />
          <Footer />
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
