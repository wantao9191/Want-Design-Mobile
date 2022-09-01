import { defineComponent } from 'vue'
import t from './index.module.scss'
export const MDemo = defineComponent({
    props: {
        html: String
    },
    setup(props, { slots }) {
        return () => (
            <main class={t.example}>
                <div class={t.code}>
                    <header>
                        <i class='iconfont want-copy'></i>
                    </header>
                    <div class={t['code-pre']}>
                        <pre class="language-css" v-html={props.html}>
                        </pre>
                    </div>
                </div>
                <div class={t.mobile}>
                    {slots.mobile?.()}
                </div>
            </main>
        )
    }
})