<template>
  <grass-switch :value="value" />
</template>

<script lang="ts">
import "@grass-kit/web-component"

export default {
  name: "Switch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
