import Switch from './Switch.vue';

export default {
  title: '开关',
  component: Switch,
};

const Template = (args) => ({
  components: { Switch },
  setup() {
    return { args };
  },
  template: '<Switch v-bind="args" />',
});

export const 开 = Template.bind({});
开.args = {
  value: true,
};

export const 关 = Template.bind({});
关.args = {
  value: false,
};
