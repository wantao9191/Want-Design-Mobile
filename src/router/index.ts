import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Doc } from "../views/doc/index";
import { Button } from "../views/doc/button";
import { Index } from "../views/index";
import { Installation } from "../views/doc/installation";

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'index', component: Index },
    {
        path: '/doc',
        name: 'doc',
        component: Doc,
        redirect: '/doc/installation',
        children: [
            { path: 'installation', name: 'installation', component: Installation, meta: { title: 'Installation' } },
            { path: 'button', name: 'button', component: Button, meta: { title: 'Button' } }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router
