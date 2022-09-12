import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'HeaderComponents/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  /**
   * 해당 스토리에 특정 랜더를 덧붙일때 추가하는 옵션
   */
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'violet' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
