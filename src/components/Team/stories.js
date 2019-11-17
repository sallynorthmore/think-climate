import React from 'react';
import { storiesOf } from '@storybook/react';
import Team from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|Team', module);

stories.add('default', () => <Team {...storyProps} />);
