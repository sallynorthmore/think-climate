import * as React from 'react';
import PropTypes from 'prop-types';
// import { IconTwitter, IconFacebook, IconLinkedIn } from '../Icons';
import * as S from './styles';

const Contact = ({
  color,
  email,
  facebookUrl,
  linkedInUrl,
  tel,
  twitterUrl
}) => (
  <S.Contact>
    <S.Item>
      <S.Link color={color} href={`mailto:${email}`}>
        <strong>{email}</strong>
      </S.Link>
    </S.Item>
    <S.Item>
      <S.Link color={color} href={`tel:${tel.code}${tel.number}`}>
        {tel.number}
      </S.Link>
    </S.Item>
    <S.Item color={color}>
      <S.Link href={twitterUrl} className="iconLink" target="_blank">
        {/* <IconTwitter /> */}
      </S.Link>
      <S.Link href={facebookUrl} className="iconLink" target="_blank">
        {/* <IconFacebook /> */}
      </S.Link>
      <S.Link href={linkedInUrl} className="iconLink" target="_blank">
        {/* <IconLinkedIn /> */}
      </S.Link>
    </S.Item>
  </S.Contact>
);

Contact.defaultProps = {};

Contact.props = {
  color: PropTypes.string,
  email: PropTypes.string,
  facebookUrl: PropTypes.string,
  linkedInUrl: PropTypes.string,
  tel: PropTypes.shape({ code: PropTypes.string, number: PropTypes.string }),
  twitterUrl: PropTypes.string
};

export default Contact;
