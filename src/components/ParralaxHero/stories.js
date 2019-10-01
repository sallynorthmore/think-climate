import React from 'react';
import { storiesOf } from '@storybook/react';
import ParralaxHero from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|ParralaxHero', module);

stories.add('default', () => <ParralaxHero {...storyProps} />);
