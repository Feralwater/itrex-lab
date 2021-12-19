import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  firstName: 'Name',
  lastName: 'Surname',
  roleName: 'Doctor',
  photo: '',
};
