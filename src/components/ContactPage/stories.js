import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactPage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|ContactPage', module);

stories.add('default', () => <ContactPage {...storyProps} />);
