import VueRouter from "vue-router";
import Welcome from "../components/Welcome.vue";
import Home from "../components/Home.vue";
import Section from "../components/Sections.vue";
import Menu from "../components/tools/VMenu";

const routes = [
    {
        path: "/",
        redirect: "/NGUESSIE-Loic",
    },
    {
        path: "/NGUESSIE-Loic",
        name: "Loco",
        component: Welcome,
        meta: { title: "Loco" },
        children: [
            {
                path: "home",
                name: "home",
                component: Menu,
                children: [
                    {
                        path: "section/:id",
                        name: "section",
                        component: Section,
                    },
                ]
            },
        ],

    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;