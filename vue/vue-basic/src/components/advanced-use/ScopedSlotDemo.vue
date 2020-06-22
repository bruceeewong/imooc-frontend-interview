<template>
  <a :href="url">
    <slot :secret="secret">默认插槽文字</slot>
  </a>
</template>

<script>
export default {
  name: "ScopedSlotDemo",
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      secret: "husssh"
    };
  }
};
</script>

<style>
</style>