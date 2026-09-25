import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/HomeView.vue";
import Booking from "../views/BookingView.vue";
import Auth from "../views/AuthView.vue";
import About from "../views/AboutView.vue";
import Price from "../views/PriceView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", name: "home", component : Home},
        {path: "/booking", name: "booking", component: Booking},
        {path: "/auth", name: "auth", component: Auth},
        {path: "/About", name: "About", component: About},
        {path: "/Price", name: "price", component: Price},
    ]
})

export default router