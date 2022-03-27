import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalWindow } from 'components';

export default {
  title: 'Example/ModalWindow',
  component: ModalWindow,
} as ComponentMeta<typeof ModalWindow>;

const Template: ComponentStory<typeof ModalWindow> = (args) => <ModalWindow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Your modal window goes here</div>,
};
