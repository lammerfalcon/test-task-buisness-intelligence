import { createRouter, createWebHistory } from "vue-router";
import CardsPage from "@/views/CardsPage";
import SettingsPage from "@/views/SettingsPage";

const routes = [
  {
    path: "/",
    redirect: "/settings",
    name: "home",
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsPage,
  },
  {
    path: "/cards",
    name: "CardsPage",
    component: CardsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
