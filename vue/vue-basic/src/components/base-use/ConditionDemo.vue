<template>
  <div>
    <input v-model="type" />
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <hr />

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>
  </div>
</template>

<script>
export default {
  name: "ConditionDemo",
  data() {
    return {
      type: "a"
    };
  }
};
</script>

<style>
</style>