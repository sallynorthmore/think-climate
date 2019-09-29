import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from './index';

// const storyProps = {};

const stories = storiesOf('Components|Banner', module);

stories.add('default', () => <Banner />);
