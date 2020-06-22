<template>
  <a :href="url">
    <slot>默认插槽文字</slot>
  </a>
</template>

<script>
export default {
  name: "SlotDemo",
  props: {
    url: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>