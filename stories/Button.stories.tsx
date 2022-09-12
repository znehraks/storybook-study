import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import { ButtonComp, ButtonProps } from './ButtonComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  /**
   * 스토리북 페이지에서 [탑의 타이틀]/[타이틀 내 해당 컴포넌트의 제목]
   */
  title: 'ButtonComponents/Button',
  /**
   * 해당 탭을 누르면 켜질 컴포넌트
   */
  component: ButtonComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  /**
   * 인수로 전달해줄 스타일 타입
   */
  // argTypes: {
  //   backgroundColor: { control: 'color' },

  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: 'f00' },
        { name: 'green', value: '0f0' },
        { name: 'blue', value: '00f' },
      ],
    },
  },
} as ComponentMeta<typeof ButtonComp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

/**
 * 이 스토리북에서 쓰일 템플릿
 */
const Template: ComponentStory<typeof ButtonComp> = ({
  primary,
  backgroundColor,
  size,
  label,
  color,
}: ButtonProps) => (
  <ButtonComp primary={primary} backgroundColor={backgroundColor} size={size} label={label} color={color} />
);

export const Primary: ComponentStory<typeof ButtonComp> = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Click me',
  backgroundColor: 'lime',
  color: 'red',
};

Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: 'f00' },
      { name: 'green', value: '0f0' },
      { name: 'blue', value: '00f' },
    ],
  },
};

export const PrimaryTest = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <ButtonComp primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor: 'beige',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
  backgroundColor: 'red',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
