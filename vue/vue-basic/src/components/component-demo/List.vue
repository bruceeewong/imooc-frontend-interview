<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <span>{{item.title}}</span>
      <button @click="onDeleteItem(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>
import event from "./event.js";
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  created() {
    console.log("List created");
  },
  mounted() {
    console.log("List mounted");

    // 添加自定义的监听函数
    event.$on("add", this.onAdd);
  },
  beforeUpdate() {
    console.log("list before update");
  },
  updated() {
    console.log("list updated");
  },
  beforeDestroy() {
    console.log("list before destory");

    // 销毁自定义事件, 否则可能造成内存泄漏
    event.$off("add", this.onAdd);
  },
  methods: {
    onDeleteItem(id) {
      this.$emit("delete", id);
    },
    onAdd(title) {
      console.log("on event add: ", title);
    }
  }
};
</script>

<style>
</style>