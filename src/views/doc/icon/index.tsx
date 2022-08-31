import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Icon = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div>Icon</div>
        )
    }
})