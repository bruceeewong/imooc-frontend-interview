<template>
  <div id="app">
    <!-- <TplDemo></TplDemo> -->
    <!-- <ComputedDemo></ComputedDemo> -->
    <!-- <WatchDemo></WatchDemo> -->
    <!-- <ClassStyleDemo></ClassStyleDemo> -->
    <!-- <ConditionDemo></ConditionDemo> -->
    <!-- <ListDemo></ListDemo> -->
    <!-- <EventDemo></EventDemo> -->
    <!-- <FormDemo></FormDemo> -->
    <!-- <ComponentDemo></ComponentDemo> -->
    <!-- <AdvancedUseDemo></AdvancedUseDemo> -->
    <!-- <NextTickDemo></NextTickDemo> -->
    <!-- <SlotDemo>你好呀</SlotDemo> -->
    <!-- <ScopedSlotDemo>
      <template v-slot="slotScope">{{slotScope.secret}}</template>
    </ScopedSlotDemo>-->
    <!-- <NamedSlotDemo>
      lalala
      <template v-slot:bottom>bottom text</template>
    </NamedSlotDemo>-->
    <!-- <button @click="() => asyncDemoShow = true">Show up!</button>
    <AsyncDemo v-if="asyncDemoShow"></AsyncDemo>-->
    <MixinDemo></MixinDemo>
  </div>
</template>

<script>
// import TplDemo from "./components/base-use/TplDemo.vue";
// import ComputedDemo from "./components/base-use/ComputedDemo.vue";
// import WatchDemo from "./components/base-use/WatchDemo.vue";
// import ClassStyleDemo from "./components/base-use/ClassStyleDemo.vue";
// import ConditionDemo from "./components/base-use/ConditionDemo.vue";
// import ListDemo from "./components/base-use/ListDemo.vue";
// import EventDemo from "./components/base-use/EventDemo.vue";
// import FormDemo from "./components/base-use/FormDemo.vue";
// import ComponentDemo from "./components/component-demo/index.vue";
// import AdvancedUseDemo from "./components/advanced-use/index.vue";
// import NextTickDemo from "./components/advanced-use/NextTickDemo.vue";
// import SlotDemo from "./components/advanced-use/SlotDemo.vue";
// import ScopedSlotDemo from "./components/advanced-use/ScopedSlotDemo.vue";
// import NamedSlotDemo from "./components/advanced-use/NamedSlotDemo.vue";
import MixinDemo from "./components/advanced-use/MixinDemo.vue";

export default {
  name: "App",
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    // ClassStyleDemo,
    // ConditionDemo,
    // ListDemo,
    // EventDemo,
    // FormDemo,
    // ComponentDemo,
    // AdvancedUseDemo,
    // NextTickDemo,
    // SlotDemo,
    // ScopedSlotDemo,
    // NamedSlotDemo,
    // AsyncDemo: () => import("./components/advanced-use/AsyncDemo.vue")
    MixinDemo
  },
  data() {
    return {
      // asyncDemoShow: false
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
