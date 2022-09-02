import { defineComponent } from 'vue'
import t from './index.module.scss'
export const MDemo = defineComponent({
    props: {
        html: String,
        params: String
    },
    setup(props, { slots }) {
        const src = `${window.location.origin}#/mobileIframe/${props.params}`
        return () => (
            <main class={t.example}>
                <div class={t.code}>
                    <header>
                        <a href="javaScript:;" title='Copy Code'>
                            <i class='iconfont want-copy'></i>
                        </a>
                    </header>
                    <pre class={[t['code-pre'], "language-css"]} v-html={props.html}></pre>
                </div>
                <iframe src={src} frameborder="0"></iframe>
            </main>
        )
    }
})