import{c as n}from"./Header.3c1de961.js";import"./Button.b501d8fd.js";var s={title:"Example/Header",parameters:{storySource:{source:`import { createHeader } from './Header';

export default {
  title: 'Example/Header',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:17},endLoc:{col:45,line:17},startBody:{col:17,line:17},endBody:{col:45,line:17}},"logged-out":{startLoc:{col:17,line:17},endLoc:{col:45,line:17},startBody:{col:17,line:17},endBody:{col:45,line:17}}}},layout:"fullscreen"},argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}};const o=e=>n(e),t=o.bind({});t.args={user:{name:"Jane Doe"}};const r=o.bind({});r.args={};const g=["LoggedIn","LoggedOut"];export{t as LoggedIn,r as LoggedOut,g as __namedExportsOrder,s as default};
//# sourceMappingURL=Header.stories.5b60091d.js.map
