<template>
  <div>
    <p>name: {{name}}</p>
    <p>info: {{info.city}}</p>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      name: "Bruski",
      info: {
        city: "深圳"
      }
    };
  },
  watch: {
    name(newVal, oldVal) {
      console.log(`watch name: newVal: ${newVal}, oldVal: ${oldVal}`);
    },
    info: {
      // 拿到的是堆地址，所以值相同
      handler(newVal, oldVal) {
        console.log(
          `watch info: newVal: ${newVal.city}, oldVal: ${oldVal.city}`
        );
      },
      deep: true // 深度监听
    }
  }
};
</script>

<style>
</style>