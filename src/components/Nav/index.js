import React from 'react';
import { Trail } from 'react-spring/renderprops';
import { Link } from 'gatsby';
import * as S from './styles';

const Nav = ({ items }) => {
  return (
    <S.Nav role="navigation" aria-label="main-navigation">
      <ul>
        <Trail
          items={items}
          keys={item => item.key}
          from={{ transform: 'translate3d(0,2rem,0)', opacity: 0 }}
          to={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
        >
          {item => props => (
            <li style={props}>
              {item.link ? (
                <Link to={item.route}>{item.text}</Link>
              ) : (
                <a href={item.route}>{item.text}</a>
              )}
            </li>
          )}
        </Trail>
      </ul>
    </S.Nav>
  );
};

Nav.defaultProps = {
  items: [
    {
      text: 'About',
      link: true,
      route: '/about'
    },
    {
      text: 'Team',
      link: false,
      route: '#team'
    },
    {
      text: 'Subscribe',
      link: false,
      route: '#subscribe'
    },
    {
      text: 'Contact',
      link: true,
      route: '/contact'
    }
  ]
};

export default Nav;
