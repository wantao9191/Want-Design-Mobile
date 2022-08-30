import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Index = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div>index</div>
        )
    }
})