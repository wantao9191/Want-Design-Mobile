import { defineComponent } from 'vue'
import t from './index.module.scss'

export const MMenu = defineComponent({
    props: { menus: { type: Array, default: [] } },
    setup(props, context) {
        return () => (
            <div class={t['m-menu']}>
                {props.menus.map((m: any) => { return (<div class={t['menu-item']}>{m.label}</div>) })}
            </div>
        )
    }
})