import * as React from 'react';
import { IconTwitter, IconFacebook, IconLinkedIn } from '../Icons';
import * as S from './styles';

type Props = {
  color?: string,
  email: string,
  facebookUrl: string,
  linkedInUrl: string,
  tel: { code: string, number: string },
  twitterUrl: string
} & typeof defaultProps;

const defaultProps = {
  color: '#431faf'
};

const Contact = (props: Props) => (
  <S.Contact>
    <S.Item>
      <S.Link color={props.color} href={`mailto:${props.email}`}>
        <strong>{props.email}</strong>
      </S.Link>
    </S.Item>
    <S.Item>
      <S.Link
        color={props.color}
        href={`tel:${props.tel.code}${props.tel.number}`}
      >
        {props.tel.number}
      </S.Link>
    </S.Item>
    <S.Item color={props.color}>
      <S.Link href={props.twitterUrl} className="iconLink" target="_blank">
        <IconTwitter />
      </S.Link>
      <S.Link href={props.facebookUrl} className="iconLink" target="_blank">
        <IconFacebook />
      </S.Link>
      <S.Link href={props.linkedInUrl} className="iconLink" target="_blank">
        <IconLinkedIn />
      </S.Link>
    </S.Item>
  </S.Contact>
);

Contact.defaultProps = defaultProps;

export default Contact;
