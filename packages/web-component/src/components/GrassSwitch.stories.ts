import './GrassSwitch'
import { html } from 'lit';
export default {
  title: 'Web组件/开关',
}

const Template = ({ value }) =>
  html`<grass-switch ?value=${value} @change=${console.log}></grass-switch>`;


export const 开 = Template.bind({});
开.args = {
  value: true,
};

export const 关 = Template.bind({});
关.args = {
  value: false,
}
