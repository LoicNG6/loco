import VueRouter from "vue-router";
import Home from "../components/Home.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

export default router;