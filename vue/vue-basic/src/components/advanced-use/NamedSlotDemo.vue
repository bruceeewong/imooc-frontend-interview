<template>
  <div>
    <a :href="url">
      <slot>默认插槽文字</slot>
    </a>

    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: "NamedSlotDemo",
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