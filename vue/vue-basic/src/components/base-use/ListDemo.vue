<template>
  <div>
    <p>遍历数组</p>
    <ul>
      <li v-for="(item, index) in listArr" :key="index">{{index}} - {{item.id}} - {{item.title}}</li>
    </ul>

    <hr />

    <p>遍历对象</p>
    <ul>
      <li v-for="(val, key, index) in listObj" :key="key">{{index}} - {{key}} - {{val.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListDemo",
  data() {
    return {
      listArr: [
        { id: "a", title: "A" },
        { id: "b", title: "B" },
        { id: "c", title: "C" }
      ],
      listObj: {
        a: { title: "A" },
        b: { title: "B" },
        c: { title: "C" }
      }
    };
  }
};
</script>

<style>
</style>