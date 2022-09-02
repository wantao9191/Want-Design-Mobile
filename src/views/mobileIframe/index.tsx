import { defineAsyncComponent, defineComponent } from "vue";
import { useRoute } from "vue-router";
export const MobileIframe = defineComponent({
    setup() {
        const route: any = useRoute()
        const components: any = {
            'button-demo1': defineAsyncComponent(() => import('../doc/button/demo1')),
            'button-demo2': defineAsyncComponent(() => import('../doc/button/demo2')),
            'tabs-demo1': defineAsyncComponent(() => import('../doc/tabs/demo1')),
            'tabs-demo2': defineAsyncComponent(() => import('../doc/tabs/demo2'))
        }
        const element = components[route.params.component]
        return () => (
            <element></element>
        )
    }
})