import * as React from 'react';
import { Link } from 'gatsby';
import { IconChevron } from '../Icons';
import * as S from './styles';

type Props = {
  links: Array<{
    items?: Array<{}>;
    text: string;
    url: string;
  }>;
} & typeof defaultProps;

const defaultProps = {};

const NavLink = props => {
  const [isExpanded, setToggle] = React.useState(false);
  const onMouseOver = () => {
    setToggle(true);
  };
  const onMouseLeave = () => {
    setToggle(false);
  };
  return (
    <S.Item
      className={`${props.items ? 'hasSubNav' : ''}`}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      <Link
        to={props.url}
        className="link"
        activeClassName="isActive"
        title={props.text}
      >
        {props.text}
      </Link>
      {props.items && (
        <S.Icon>
          <IconChevron color="white" width="16px" />
        </S.Icon>
      )}

      {props.items && (
        <S.SubItems isExpanded={isExpanded}>
          {props.items.map(item => (
            <S.SubItem key={item.text}>
              <Link
                to={item.url}
                className="link"
                activeClassName="isActive"
                title={props.text}
              >
                {item.text}
              </Link>
            </S.SubItem>
          ))}
        </S.SubItems>
      )}
    </S.Item>
  );
};

const Nav = (props: Props) => {
  return (
    <S.Nav>
      <S.Items>
        {props.links &&
          props.links.length > 0 &&
          props.links.map(link => <NavLink {...link} key={`${link.text}`} />)}
      </S.Items>
    </S.Nav>
  );
};

Nav.defaultProps = defaultProps;

export default Nav;
