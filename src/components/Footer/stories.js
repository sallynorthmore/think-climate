import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|Footer', module);

stories.add('default', () => <Footer {...storyProps} />);
