import { defineComponent } from 'vue'
export const Installation = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            'cnpm install --save @wantao/want-ui',
            Prism.languages.javascript,
            "html"
        )
        const D2 = Prism.highlight(
            `import WantUi from '@wantao/want-ui'
            
const app = createApp(App)

app.use(WantUi)`,
            Prism.languages.javascript,
            "html"
        )
        const D3 = Prism.highlight(
            `import { button } from '@wantao/want-ui'

const app = createApp(App)

app.use(button)`,
            Prism.languages.javascript,
            "html"
        )
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Quick Start 快速开始</h2>
                    <p></p>
                </header>
                <h3>安装</h3>
                <pre v-html={D1} class="language-css"></pre>
                <p class={'desc'}>目前npm安装会出现 <code>"workspace:": workspace:*</code> 错误，所以只能使用cnpm安装</p>
                <h3>引用</h3>
                <pre v-html={D2} class="language-css"></pre>
                <h3 style={{ 'margin-top': '24px' }}>按需加载</h3>
                <pre v-html={D3} class="language-css"></pre>
                <p class={'desc'}>直接引入组件即可，want-ui 会自动为你加载 css 样式文件：</p>
            </div>
        )
    }
})