<template>
  <div>
    <p>State B</p>
  </div>
</template>

<script>
export default {
  name: "KeepAliveStateB",
  mounted() {
    console.log("B mounted");
  },
  destroyed() {
    console.log("B destroyed");
  }
};
</script>

<style>
</style>