import { defineComponent } from 'vue'
import t from './index.module.scss'
import logo from '@/assets/images/vite.svg'
import { useRouter } from 'vue-router'
export const MHeader = defineComponent({
    props: {},
    setup(props, context) {
        const router = useRouter()
        const click = () => {
            router.push('/')
        }
        return () => (
            <header class={[t['m-header'], 'shadow']}>
                <div class={t.logo}>
                    <img src={logo} alt="" />
                    <h3>Want Design Mobile</h3>
                </div>
                <div class={t.menu}>
                    指南
                    组件
                </div>
            </header>
        )
    }
})