import { createwebhistory,createRouter} from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history:createwebhistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:HomeView
        },{
            path:"/about",
            name:"About",
            component:AboutView
        },{
            path:"/:pathMatch(.*)*",
            name:"notFound",
            component:NotFound
        }
    ]
});

export default router;