type menuArr = { label: string, path?: string, children?: Array<menuArr> }
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { MMenu } from '../../../components/MMenu'
import t from './index.module.scss'
export const Doc = defineComponent({
    components: { MMenu },
    props: {},
    setup(props, context) {
        const menu: Array<menuArr> = [
            {
                label: 'Install', children: [
                    { label: '快速开始 Quick Start', path: '/doc/installation' },
                ]
            },
            {
                label: 'Basic', children: [
                    { label: '图标 Icon', path: '/doc/icon' },
                    { label: '按钮 Button', path: '/doc/button' },
                ]
            },
        ]
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