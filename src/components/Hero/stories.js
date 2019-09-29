import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './index';

const storyProps = {
  headline: 'Hero headline text',
  smallText: 'The fine print'
};

const stories = storiesOf('Components|Hero', module);

stories.add('default', () => <Hero {...storyProps} />);
