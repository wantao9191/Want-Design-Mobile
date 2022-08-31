import { defineComponent } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import t from './index.module.scss'

export const MMenu = defineComponent({
    props: { menus: { type: Array, default: [] } },
    setup(props, context) {
        const router = useRouter()
        return () => (
            <div class={t['m-menu']}>
                {props.menus.map((m: any) => {
                    return (
                        <div class={[t['menu-item']]}>
                            <div class={m.children ? t['menu-item-title'] : ''}>
                                {m.label}
                            </div>
                            <div class={t['menu-childs']}>
                                {m.children && m.children.map((c: any) => {
                                    return (
                                        <div class={[t['menu-item'], 'menu-item']}>
                                            <RouterLink to={c.path}>{c.label}</RouterLink>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
})