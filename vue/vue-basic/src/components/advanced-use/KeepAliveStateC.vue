<template>
  <div>
    <p>State C</p>
  </div>
</template>

<script>
export default {
  name: "KeepAliveStateC",
  mounted() {
    console.log("C mounted");
  },
  destroyed() {
    console.log("C destroyed");
  }
};
</script>

<style>
</style>