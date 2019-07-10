import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store/store";
import { IS_AUTHENTICATED } from "@/store/type";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post",
      name: "post",
      component: () => import("./views/Post.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue"),
      meta: {
        guest: true
      }
    }
  ]
});
router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters[IS_AUTHENTICATED]) {
      next("/login");
      return;
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters[IS_AUTHENTICATED]) {
      next("/");
      return;
    }
  }
  next();
});
export default router;
