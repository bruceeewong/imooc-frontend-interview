<template>
  <input :value="text" type="text" @input="$emit('change', $event.target.value)" />
</template>

<script>
export default {
  name: "CustomVModel",
  model: {
    prop: "text",
    event: "change"
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>