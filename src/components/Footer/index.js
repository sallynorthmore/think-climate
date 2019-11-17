import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from './styles';

const Footer = ({ items }) => (
  <S.Footer>
    <ul>
      {items.map(item => (
        <li key={item.text}>
          {item.link ? (
            <Link to={item.route}>{item.text}</Link>
          ) : (
            <a href={item.route}>{item.text}</a>
          )}
        </li>
      ))}
      <li>
        <p>&copy; 2019</p>
      </li>
    </ul>
  </S.Footer>
);

Footer.defaultProps = {
  items: [
    {
      text: 'About',
      link: true,
      route: '/about'
    },
    // {
    //   text: 'Team',
    //   link: false,
    //   route: '#team'
    // },
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

Footer.props = {
  exampleProp: PropTypes.string
};

export default Footer;
