import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Index } from "../views/index";

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'index', component: Index }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router
