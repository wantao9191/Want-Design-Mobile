import { defineAsyncComponent, defineComponent } from "vue";
import { useRoute } from "vue-router";
export const MobileIframe = defineComponent({
    setup() {
        const route: any = useRoute()
        const components: any = {
            'button-demo1': defineAsyncComponent(() => import('../doc/button/demo1')),
            'button-demo2': defineAsyncComponent(() => import('../doc/button/demo2')),
            'tabs-demo1': defineAsyncComponent(() => import('../doc/tabs/demo1')),
            'tabs-demo2': defineAsyncComponent(() => import('../doc/tabs/demo2')),
            'space-demo1': defineAsyncComponent(() => import('../doc/space/demo1')),
            'actionSheet-demo1': defineAsyncComponent(() => import('../doc/actionSheet/demo1')),
            'checkbox-demo1': defineAsyncComponent(() => import('../doc/checkbox/demo1')),
            'input-demo1': defineAsyncComponent(() => import('../doc/input/demo1')),
            'picker-demo1': defineAsyncComponent(() => import('../doc/picker/demo1')),
            'switch-demo1': defineAsyncComponent(() => import('../doc/switch/demo1')),
            'radio-demo1': defineAsyncComponent(() => import('../doc/radio/demo1')),
            'dialog-demo1': defineAsyncComponent(() => import('../doc/dialog/demo1')),
            'modal-demo1': defineAsyncComponent(() => import('../doc/modal/demo1')),
            'popup-demo1': defineAsyncComponent(() => import('../doc/popup/demo1')),
            'toast-demo1': defineAsyncComponent(() => import('../doc/toast/demo1')),
            'swiper-action-demo1': defineAsyncComponent(() => import('../doc/swipeAction/demo1')),
            'notice-bar-demo1': defineAsyncComponent(() => import('../doc/noticeBar/demo1')),
            'collapse-demo1': defineAsyncComponent(() => import('../doc/collapse/demo1'))
        }
        const element = components[route.params.component]
        return () => (
            <element></element>
        )
    }
})