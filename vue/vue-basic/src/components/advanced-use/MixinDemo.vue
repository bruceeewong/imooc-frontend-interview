<template>
  <div>
    <p>{{name}} - {{major}} - {{city}}</p>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "MixinDemo",
  mixins: [mixin],
  data() {
    return {
      name: "Bruski",
      major: "Web 前端"
    };
  },
  methods: {},
  mounted() {
    console.log("this mounted");
  }
};
</script>

<style>
</style>