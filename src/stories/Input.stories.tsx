import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
  inputSize: 'large',
};

export const Small = Template.bind({});
Small.args = {
  inputSize: 'small',
};
