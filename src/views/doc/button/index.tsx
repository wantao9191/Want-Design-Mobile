import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Button = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div>button</div>
        )
    }
})