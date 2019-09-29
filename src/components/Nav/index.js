import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as S from './styles';

const Nav = ({ links }) => {
  return (
    <S.Nav>
      <S.Items>
        {links &&
          links.length > 0 &&
          links.map(link => <Link {...link} key={`${link.text}`} />)}
      </S.Items>
    </S.Nav>
  );
};

Nav.props = {
  links: PropTypes.shape({ text: PropTypes.string, url: PropTypes.string })
};

export default Nav;
