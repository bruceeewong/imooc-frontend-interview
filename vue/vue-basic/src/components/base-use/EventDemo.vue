<template>
  <div>
    <p>num: {{num}}</p>
    <button @click="onAdd1">+1</button>
    <button @click="onAdd2(2, $event)">+2</button>

    <!-- 事件修饰符 -->
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis">anchor</a>

    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 可以串联 -->
    <a v-on:click.stop.prevent="doThat">anchor</a>

    <!-- 添加事件监听器时，使用捕获模式 -->
    <!-- 即内部元素触发的事件，现在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只当在 event.target 是当前元素自身时触发 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 按键修饰符 -->
    <!-- 即使 Alt 或 Shift 被一同按下也会触发 -->
    <button v-on:click.ctrl="onClick">...</button>

    <!-- 有且只有ctrl被按下才会触发 -->
    <button v-on:click.ctrl.exact="onClick">...</button>

    <!-- 无任何修饰符被按下，才会触发 -->
    <button v-on:click.exact="onClick">...</button>
  </div>
</template>

<script>
export default {
  name: "EvenetDemo",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    // 默认传event
    onAdd1(event) {
      console.log(`event: `, event, event.__proto__.constructor); // 原生的event
      console.log(`target: `, event.target);
      console.log(`currentTarget: `, event.currentTarget); // 事件是注册到当前元素上的
      this.num++;
    },
    onAdd2(val, event) {
      console.log(`event: `, event, event.__proto__.constructor); // 原生的event
      console.log(`target: `, event.target);
      console.log(`currentTarget: `, event.currentTarget);
      this.num = val;
    }
  }
};
</script>

<style>
</style>