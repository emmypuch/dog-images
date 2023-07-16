import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import WelcomeUser from "../pages/WelcomeUser.vue";
import AboutUs from "../pages/AboutUs.vue";
import ContactUs from "../pages/ContactUs.vue";
import BreedInfo from "../pages/BreedInfo.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Welcome user",
    component: WelcomeUser,
  },
  {
    path: "/about",
    name: "about us",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "contact us",
    component: ContactUs,
  },
  {
    path: "/breedinfo/:dogUrl",
    name: "BreedInfo",
    component: BreedInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
