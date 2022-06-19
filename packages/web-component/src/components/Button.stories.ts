import './Button'
import { html } from 'lit';
export default {
  title: 'Web组件/按钮',
}

const Template = ({ primary, label }) =>
  html`<x-button ?primary=${primary} .label=${label}></x-button>`;

export const 默认按钮 = Template.bind({});
默认按钮.args = {
  primary: false,
  label: '默认按钮',
}

export const 主要按钮 = Template.bind({});
主要按钮.args = {
  primary: true,
  label: '主要按钮',
};