<template>
  <div>
    <Input @add="onAdd" />
    <List :list="list" @delete="onDelete"></List>
  </div>
</template>

<script>
import Input from "./Input.vue";
import List from "./List.vue";

export default {
  name: "ComponentDemo",
  components: {
    Input,
    List
  },
  data() {
    return {
      list: [
        { id: "id-1", title: "标题1" },
        { id: "id-2", title: "标题2" }
      ]
    };
  },
  created() {
    console.log("index created");
  },
  mounted() {
    console.log("index mounted");
  },
  beforeUpdate() {
    console.log("index before update");
  },
  updated() {
    console.log("index updated");
  },
  beforeDestroy() {
    console.log("index before destory");
  },
  methods: {
    onAdd(title) {
      this.list.push({
        id: `id-${Date.now()}`,
        title
      });
    },
    onDelete(id) {
      this.list = this.list.filter(item => item.id !== id);
    }
  }
};
</script>

<style>
</style>