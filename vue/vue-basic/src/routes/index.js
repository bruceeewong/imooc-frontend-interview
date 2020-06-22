import VueRouter from "vue-router";
import TplDemo from "../components/base-use/TplDemo";

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: TplDemo,
    },
    {
      path: "/advanced-use",
      component: () =>
        import(
          /* webpackChunkName: "advanced-use" */ "../components/advanced-use/index.vue"
        ),
    },
  ],
});
