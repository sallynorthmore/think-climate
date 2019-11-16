import React from 'react';
import { Link } from 'gatsby';
import * as S from './styles';

const Nav = () => {
  return (
    <S.Nav role="navigation" aria-label="main-navigation">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#subscribe">Subscribe</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;
