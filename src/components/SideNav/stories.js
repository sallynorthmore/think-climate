import React from 'react';
import { storiesOf } from '@storybook/react';
import SideNav from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|SideNav', module);

stories.add('default', () => <SideNav {...storyProps} />);
