<template>
  <grass-button :primary="primary" :label="label" />
</template>

<script lang="ts">
import "@grass-kit/web-component"

export default {
  name: "Button",
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
