import * as React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, GlobalTheme } from '../StyleGuide/global';

import * as S from './styles';

const Layout = props => {
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
};

export default Layout;
