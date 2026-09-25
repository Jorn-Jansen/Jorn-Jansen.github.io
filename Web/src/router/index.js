import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/HomeView.vue";
import Booking from "../views/BookingView.vue";
import Auth from "../views/AuthView.vue";
import About from "../views/AboutView.vue";
import Price from "../views/PriceView.vue";
import Admin from "../views/AdminView.vue";
import {supabase} from "../lib/supabase";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", name: "home", component : Home},
        {path: "/booking", name: "booking", component: Booking},
        {path: "/auth", name: "auth", component: Auth},
        {path: "/About", name: "About", component: About},
        {path: "/Price", name: "price", component: Price},
        {path: "/admin", name: "admin", component: Admin},
    ]
})

router.beforeEach(async (to) => {
    if (to.path === "/admin") {
        const {data} = await supabase.auth.getSession()
        if (!data.session) {
            return "/auth"
        }
    }
})

export default router