import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Doc } from "../views/doc/index";
import { Installation } from "../views/doc/installation";
import { Icon } from "../views/doc/icon";
import { Button } from "../views/doc/button";
import { Index } from "../views/index";
import { Space } from "../views/doc/space";
import { ActionSheet } from "../views/doc/actionSheet";
import { Collapse } from "../views/doc/collapse";
import { Dialog } from "../views/doc/dialog";
import { Modal } from "../views/doc/modal";
import { NoticeBar } from "../views/doc/noticeBar";
import { Popup } from "../views/doc/popup";
import { SwipeAction } from "../views/doc/swipeAction";
import { Swiper } from "../views/doc/swiper";
import { Switch } from "../views/doc/switch";
import { Tabs } from "../views/doc/tabs";
import { Toast } from "../views/doc/toast";
import { Checkbox } from "../views/doc/checkbox";
import { Input } from "../views/doc/input";
import { Picker } from "../views/doc/picker";
import { Radio } from "../views/doc/radio";

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'index', component: Index },
    {
        path: '/doc',
        name: 'doc',
        component: Doc,
        redirect: '/doc/installation',
        children: [
            { path: 'actionSheet', name: 'actionSheet', component: ActionSheet, meta: { title: 'ActionSheet' } },
            { path: 'button', name: 'button', component: Button, meta: { title: 'Button' } },
            { path: 'collapse', name: 'collapse', component: Collapse, meta: { title: 'Collapse' } },
            { path: 'checkbox', name: 'checkbox', component: Checkbox, meta: { title: 'Checkbox' } },
            { path: 'dialog', name: 'dialog', component: Dialog, meta: { title: 'Dialog' } },
            { path: 'installation', name: 'installation', component: Installation, meta: { title: 'Installation' } },
            { path: 'icon', name: 'icon', component: Icon, meta: { title: 'Icon' } },
            { path: 'input', name: 'input', component: Input, meta: { title: 'Input' } },
            { path: 'modal', name: 'modal', component: Modal, meta: { title: 'Modal' } },
            { path: 'noticeBar', name: 'noticeBar', component: NoticeBar, meta: { title: 'NoticeBar' } },
            { path: 'popup', name: 'popup', component: Popup, meta: { title: 'Popup' } },
            { path: 'picker', name: 'picker', component: Picker, meta: { title: 'Picker' } },
            { path: 'radio', name: 'radio', component: Radio, meta: { title: 'Radio' } },
            { path: 'swipeAction', name: 'swipeAction', component: SwipeAction, meta: { title: 'SwipeAction' } },
            { path: 'swiper', name: 'swiper', component: Swiper, meta: { title: 'Swiper' } },
            { path: 'space', name: 'space', component: Space, meta: { title: 'Space' } },
            { path: 'switch', name: 'switch', component: Switch, meta: { title: 'Switch' } },
            { path: 'tabs', name: 'tabs', component: Tabs, meta: { title: 'Tabs' } },
            { path: 'toast', name: 'toast', component: Toast, meta: { title: 'Toast' } },
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router
