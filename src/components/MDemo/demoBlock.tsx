import { defineComponent } from 'vue'
import t from './demoBlock.module.scss'
export const Demoblock = defineComponent({
    props: { title: String },
    setup(props, { slots }) {
        return () => (
            <div class={t['demo-block']}>
                <header>{props.title}</header>
                <main>{slots.default?.()}</main>
            </div>
        )
    }
})