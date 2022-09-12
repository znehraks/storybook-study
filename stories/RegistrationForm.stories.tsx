import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import RegistrationForm from './RegistrationForm';

export default {
  title: 'PlayStudy/RegistrationForm',
  component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = () => <RegistrationForm />;

export const RegistrationStory = Template.bind({});

RegistrationStory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  //   const emailInput = screen.getByLabelText('email', {
  //     selector: 'input',
  //   });

  await userEvent.type(canvas.getByTestId('email'), 'znehraks@gmail.com', {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId('password'), '12341234', {
    delay: 100,
  });
};
