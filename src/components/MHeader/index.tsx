import { defineComponent } from 'vue'
import t from './index.module.scss'
import logo from '@/assets/images/vite.svg'
import { useRouter } from 'vue-router'
export const MHeader = defineComponent({
    props: {},
    setup(props, context) {
        const router = useRouter()
        const click = (path: string = '/') => {
            router.push(path)
        }
        return () => (
            <header class={[t['m-header'], 'shadow']}>
                <div class={t.logo} onClick={() => { click('/') }}>
                    <img src={logo} alt="" />
                    <h3>Want Design Mobile</h3>
                </div>
                <div class={t.menu}>
                    <want-button fill='none'>指南</want-button>
                    <want-button fill='none' onClick={() => { click('/doc') }}>组件</want-button>
                </div>
            </header>
        )
    }
})