import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { MMenu } from '../../../components/MMenu'
import t from './index.module.scss'
type menuArr = { label: string, path?: string }
export const Doc = defineComponent({
    components: { MMenu },
    props: {},
    setup(props, context) {
        const menu: Array<menuArr> = [{ label: '快速开始 Quick Start', path: '/doc/installation' }]
        return () => (
            <div class={t['doc-container']}>
                <m-menu menus={menu}></m-menu>
                <div class={t['router-content']}>
                    <RouterView />
                </div>
            </div>
        )
    }
})