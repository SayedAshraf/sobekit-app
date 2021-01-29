import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Users",
      component: () => import("@/views/Users.vue"),
    },
    {
      path: "/user/:id",
      name: "SingleUser",
      component: () => import("@/views/SingleUser.vue"),
    },
  ],
});

export default router;
