<template>
  <div>
    <button @click="addItem">Add</button>
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      list: ["a", "b", "c"]
    };
  },
  methods: {
    addItem() {
      this.list.push(Date.now());
      this.list.push(Date.now());
      this.list.push(Date.now());

      // 添加完想立刻获取长度, 不能及时拿到
      // 要用nextTick等渲染完了才能获取准确的dom个数
      this.$nextTick(() => {
        console.log(this.$refs.ul1.childNodes.length);
      });
      // console.log(this.$refs.ul1.childNodes.length);
    }
  }
};
</script>

<style>
</style>