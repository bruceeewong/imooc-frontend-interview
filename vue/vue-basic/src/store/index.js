import Vuex from "vuex";

export default new Vuex.Store({
  state: { name: "", age: 0 },
  getters: {
    myName: (state) => {
      return state.name.slice();
    },
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_AGE(state, age) {
      state.age = age;
    },
  },
  actions: {
    init(context, payload) {
      context.commit("SET_NAME", payload.name);
      context.commit("SET_AGE", payload.age);
    },
  },
});
