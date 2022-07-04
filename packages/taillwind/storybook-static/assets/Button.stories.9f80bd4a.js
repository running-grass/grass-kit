import{c as e}from"./Button.b501d8fd.js";var i={parameters:{storySource:{source:`import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:20},endLoc:{col:1,line:24},startBody:{col:17,line:20},endBody:{col:1,line:24}},secondary:{startLoc:{col:17,line:20},endLoc:{col:1,line:24},startBody:{col:17,line:20},endBody:{col:1,line:24}},large:{startLoc:{col:17,line:20},endLoc:{col:1,line:24},startBody:{col:17,line:20},endBody:{col:1,line:24}},small:{startLoc:{col:17,line:20},endLoc:{col:1,line:24},startBody:{col:17,line:20},endBody:{col:1,line:24}}}}},title:"Example/Button",argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}};const o=({label:n,...t})=>e({label:n,...t}),r=o.bind({});r.args={primary:!0,label:"Button"};const l=o.bind({});l.args={label:"Button"};const a=o.bind({});a.args={size:"large",label:"Button"};const s=o.bind({});s.args={size:"small",label:"Button"};const d=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,l as Secondary,s as Small,d as __namedExportsOrder,i as default};
//# sourceMappingURL=Button.stories.9f80bd4a.js.map
