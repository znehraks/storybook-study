import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import screenShot from '../public/image.png';

import TestComponent, { IProps } from './TestComponent';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = (args) => <TestComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: 'first story yitle',
  size: 10,
  contents: ['contentsssss', '1', '2', '3', '4', '5'],
  url: screenShot.src,
} as IProps;
