<template>
  <div>
    <p :class="{blue:isBlue, gray: isGray}">使用class对象语法</p>
    <p :class="[blue, gray]">使用class 数组语法</p>
    <p :style="styleData">使用动态style</p>
  </div>
</template>

<script>
export default {
  name: "ClassStyleDemo",
  data() {
    return {
      isBlue: true,
      isGray: false,
      blue: "blue",
      gray: "gray",
      styleData: {
        fontSize: "40px",
        color: "red",
        backgroundColor: "#ccc"
      }
    };
  }
};
</script>

<style lang="css" scoped>
.blue {
  color: blue;
}
.gray {
  color: gray;
}
</style>