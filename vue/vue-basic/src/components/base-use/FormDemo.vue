<template>
  <div>
    <p>name: {{name}}</p>
    <input v-model.trim="name" type="text" placeholder="trim 删除空格" />
    <input v-model.lazy="name" type="text" placeholder="lazy 防抖" />

    <p>age: {{age}}</p>
    <input v-model.number="age" type="text" />
    <hr />

    <p>多行文本: {{desc}}</p>
    <textarea v-model="desc"></textarea>
    <hr />

    <p>复选框: {{checked}}</p>
    <input v-model="checked" type="checkbox" />
    <hr />

    <p>多个复选框: {{checkedNames}}</p>
    <input v-model="checkedNames" type="checkbox" id="jack" value="Jack" />
    <label for="jack">Jack</label>
    <input v-model="checkedNames" type="checkbox" id="mike" value="Mike" />
    <label for="mike">Mike</label>
    <input v-model="checkedNames" type="checkbox" id="amy" value="Amy" />
    <label for="amy">Amy</label>
    <hr />

    <p>单选, 性别: {{gender}}</p>
    <input v-model="gender" type="radio" id="male" value="male" />
    <label for="male">男</label>
    <input v-model="gender" type="radio" id="femal" value="female" />
    <label for="female">女</label>
    <hr />

    <p>下拉列表选择: {{selected}}</p>
    <select v-model="selected">
      <option disabled value>请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <p>下拉列表选择(多选) {{selectedList}}</p>
    <select v-model="selectedList" multiple>
      <option disabled value>请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormDemo",
  data() {
    return {
      name: "",
      age: 0,
      desc: "",

      checked: false,
      checkedNames: [],

      gender: "male",

      selected: "",
      selectedList: []
    };
  }
};
</script>

<style>
</style>