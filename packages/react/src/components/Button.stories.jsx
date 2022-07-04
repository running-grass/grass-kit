import React from 'react';

import { Button } from './Button';

export default {
  title: 'React/按钮',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <Button  {...args} />;

export const 主要按钮 = Template.bind({});

主要按钮.args = {
  primary: true,
  label: '主要按钮',
};

export const 次要按钮 = Template.bind({});
次要按钮.args = {
  label: '次要按钮',
};


export const 禁用状态 = Template.bind({});
禁用状态.args = {
  label: '次要按钮',
};
