<template>
  <div>
    <p>文本插值 {{message}}</p>
    <p>JS 表达式 {{flag?'yes': 'no'}} (只能是表达式，不能是语句)</p>
    <p :id="dynamicId">动态属性</p>
    <hr />
    <p v-html="rawHtml">
      <span>[注意]使用v-html后，将覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "TplDemo",
  data() {
    return {
      message: "你好呀，朋友",
      flag: true,
      dynamicId: `ID-${Date.now()}`,
      rawHtml: `一些父文本: <i>斜体</i><b>粗体</b>`
    };
  }
};
</script>

<style>
</style>