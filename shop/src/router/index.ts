import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProductView from "@/components/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
      ],
    },
    {
      path: "/caskets",
      component: DefaultLayout,
      props: { isProduct: true },
      children: [
        {
          path: "",
          name: "caskets",
          component: ProductView,
          props: {
            category: "caskets",
          },
        },
      ],
    },
    {
      path: "/jackets",
      component: DefaultLayout,
      props: { isProduct: true },
      children: [
        {
          path: "",
          name: "jackets",
          component: ProductView,
          props: {
            category: "jackets",
          },
        },
      ],
    },
    {
      path: "/boxers",
      component: DefaultLayout,
      props: { isProduct: true },
      children: [
        {
          path: "",
          name: "boxers",
          component: ProductView,
          props: {
            category: "boxers",
          },
        },
      ],
    },
    {
      path: "/about",
      component: DefaultLayout,
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
