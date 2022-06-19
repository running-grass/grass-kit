import './XSwitch'
import { html } from 'lit';
export default {
  title: 'Web组件/开关',
}

const Template = ({ on }) =>
  html`<x-switch ?on=${on} @change=${console.log}></x-switch>`;

export const 关 = Template.bind({});
关.args = {
  on: false,
}

export const 开 = Template.bind({});
开.args = {
  on: true,
};