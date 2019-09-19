import * as React from 'react';
import * as S from './styles';

type Props = {
  children?: any;
} & typeof defaultProps;

const defaultProps = {};

const Content = (props: Props) => <S.Content>{props.children}</S.Content>;

Content.defaultProps = defaultProps;

export default Content;
