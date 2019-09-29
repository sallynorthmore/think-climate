import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Contact from './index';

const storyProps = {
  email: 'email@email.com',
  tel: {
    code: '+44',
    number: '07985774332'
  }
};

const stories = storiesOf('Components|Contact', module);

stories.add('default', () => <Contact {...storyProps} />);
