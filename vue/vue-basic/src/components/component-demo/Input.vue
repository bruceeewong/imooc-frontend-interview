<template>
  <div>
    <input v-model="title" type="text" />
    <button @click="onAdd">Add</button>
  </div>
</template>

<script>
import event from "./event.js";

export default {
  name: "Input",
  data() {
    return {
      title: ""
    };
  },
  created() {
    console.log("Input created");
  },
  mounted() {
    console.log("Input mounted");
  },
  methods: {
    onAdd() {
      this.$emit("add", this.title);

      // 自定义示例
      event.$emit("add", this.title);

      this.title = "";
    }
  }
};
</script>

<style>
</style>