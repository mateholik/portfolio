import Vue from "vue";
import Router from "vue-router";
import FAQ from "./views/FAQ.vue";
import Portfolio from "./views/Portfolio.vue";
import Calc from "./views/Calc.vue";
import Paslaugos from "./views/Paslaugos.vue";
import Javascript from "./views/Javascript.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Portfolio,
    },
    {
      path: "/duk",
      name: "duk",
      component: FAQ,
    },
    {
      path: "/kaina",
      name: "kaina",
      component: Calc,
    },
    {
      path: "/paslaugos",
      name: "paslaugos",
      component: Paslaugos,
    },
    {
      path: "/javascript",
      name: "javascript",
      component: Javascript,
    },
  ],
});
