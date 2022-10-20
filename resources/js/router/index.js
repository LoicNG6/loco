import VueRouter from "vue-router";
import Welcome from "../components/Welcome.vue";
import Home from "../components/Home.vue";
const routes = [
    {
        path: "/",
        name: "welcome",
        component: Welcome,
        meta: { title: "welcome" },
        children: [
            {
                path: "home",
                name: "home",
                component: Home,
                meta: { title: "home" },
            },
        ],
    },
    // {
    //     path: "/home",
    //     name: "home",
    //     component: Home,
    //     meta: {title: "home"},
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

export default router;