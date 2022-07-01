import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'React/开关',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const 开 = Template.bind({});
开.args = {
  value: true,
  onChange: console.log,
};

export const 关 = Template.bind({});
关.args = {
  value: false,
  onChange: console.log,
};
