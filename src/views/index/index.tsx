import { defineComponent } from 'vue'
import t from './index.module.scss'
import logo from '@/assets/images/vite.svg'
import { useRouter } from 'vue-router'
export const Index = defineComponent({
    props: {},
    setup(props, context) {
        const router = useRouter()
        const click = ()=>{
            router.push('/doc')
        }
        return () => (
            <div class={t['page-container']}>
                <h1>
                    <img src={logo} alt="" />
                    <span>Want Design Mobile</span>
                    <div class={t.desc}>基于 Vue3 的个人级 UI Mobile组件库和前端解决方案， 为无数开发者服务</div>
                </h1>

                <div class={t.btns}>
                    <want-button type='primary' size='large' onClick={click}>开始使用</want-button>
                    <want-button class={t['btn-2']} size='large'>前往GitHub</want-button>
                </div>
                <div class={t.intros}>
                    <div class={t['intro-item']}>
                        <div class={t.title}>易用</div>
                        <div class={t.desc}>已经会了Vue？即刻阅读指南开始构建应用！</div>
                    </div>
                    <div class={t['intro-item']}>
                        <div class={t.title}>灵活</div>
                        <div class={t.desc}>按需加载，全部加载，由你掌控！</div>
                    </div>
                    <div class={t['intro-item']}>
                        <div class={t.title}>高效</div>
                        <div class={t.desc}>样式、功能无需操心，C&V操作，自在自由！</div>
                    </div>
                </div>
            </div>
        )
    }
})