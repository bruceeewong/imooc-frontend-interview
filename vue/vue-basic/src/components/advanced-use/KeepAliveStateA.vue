<template>
  <div>
    <p>State A</p>
  </div>
</template>

<script>
export default {
  name: "KeepAliveStateA",
  mounted() {
    console.log("A mounted");
  },
  destroyed() {
    console.log("A destroyed");
  }
};
</script>

<style>
</style>