import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Icon = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class={'demo-container'}>
                <h1>Icon 图标</h1>
                <h3>图标列表</h3>
            </div>
        )
    }
})