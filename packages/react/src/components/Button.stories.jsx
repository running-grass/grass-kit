import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'React/按钮',
  // component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => <Button  {...args} />;

export const 主要按钮 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
主要按钮.args = {
  primary: true,
  label: '主要按钮',
};

export const 次要按钮 = Template.bind({});
次要按钮.args = {
  label: '次要按钮',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
