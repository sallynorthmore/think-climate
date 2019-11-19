import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutPage from './index';

const storyProps = {
  exampleProp: 'The fine print'
};

const stories = storiesOf('Components|AboutPage', module);

stories.add('default', () => <AboutPage {...storyProps} />);
