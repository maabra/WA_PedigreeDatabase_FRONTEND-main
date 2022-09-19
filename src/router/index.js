import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/compare",
    name: "compare",
    component: () =>
      import(/* webpackChunkName: "Compare" */ "../views/CompareView.vue"),
  },
  {
    path: "/dog",
    name: "dog",
    component: () =>
      import(/* webpackChunkName: "Dog" */ "../views/DogView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "List" */ "../views/ListView.vue"),
  },
  {
    path: "/adddog",
    name: "adddog",
    component: () =>
      import(/* webpackChunkName: "AddDog" */ "../views/AddDogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;