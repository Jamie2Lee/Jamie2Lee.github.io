import { createWebHistory,createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:HomeView,
        },
        {
            path:"/about",
            name:"About",
            component:AboutView,
        },
        {
            path:"/cart",
            name:"Cart",
            component:()=>import("@/views/CartView.vue")
        },
        {
            path:"/:pathMatch(.*)*",
            name:"notFound",
            component:NotFound,
        }
    ]
});

export default router;