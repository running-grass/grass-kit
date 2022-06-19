import './Button'
import { html } from 'lit';
export default {
  title: 'Web组件/按钮',
}

const Template = ({ primary, label }) =>
  html`<x-button ?primary=${primary} .label=${label}></x-button>`;

export const 基础 = Template.bind({});
基础.args = {
  primary: false,
  label: '基础按钮',
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};