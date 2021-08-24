import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'

const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Shoppingcart = () => import("../views/cart/Shoppingcart");
const Profile = () => import("../views/profile/Profile");

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shoppingcart",
    component: Shoppingcart
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new Router({
  routes,
  mode: "history"
});

export default router;
