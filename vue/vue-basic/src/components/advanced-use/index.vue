<template>
  <div>
    <!-- <p>name {{name}}</p> -->
    <!-- <CustomVModel v-model="name"></CustomVModel> -->
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <keep-alive>
      <KeepAliveStageA v-if="state === 'A'"></KeepAliveStageA>
      <KeepAliveStageB v-if="state === 'B'"></KeepAliveStageB>
      <KeepAliveStageC v-if="state === 'C'"></KeepAliveStageC>
    </keep-alive>
  </div>
</template>

<script>
// import CustomVModel from "./CustomVModel.vue";
import KeepAliveStageA from "./KeepAliveStateA";
import KeepAliveStageB from "./KeepAliveStateB";
import KeepAliveStageC from "./KeepAliveStateC";

export default {
  name: "AdvancedUse",
  components: {
    // CustomVModel,
    KeepAliveStageA,
    KeepAliveStageB,
    KeepAliveStageC
  },
  data() {
    return {
      // name: "",
      state: "A"
    };
  },
  methods: {
    changeState(state) {
      this.state = state;
    }
  }
};
</script>

<style>
</style>