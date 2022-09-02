import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
import demoBlock1 from './demo1'
import demo2 from './demo2?raw'
import demoBlock2 from './demo2'
export const Tabs = defineComponent({
    components: { demoBlock1,demoBlock2 },
    setup() {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const D2 = Prism.highlight(
            demo2,
            Prism.languages.javascript,
            "html"
        )
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Tabs 标签页</h2>
                    <p>内容组之间进行导航切换。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>当前内容需要分成同层级结构的组，进行内容切换展示，常用在表单或者列表的顶部。</p>
                <h2>示例</h2>
                <m-demo html={D1} v-slots={{ mobile: () => <demo-block1></demo-block1> }}></m-demo>
                <m-demo html={D2} v-slots={{ mobile: () => <demo-block2></demo-block2> }}></m-demo>
            </div>
        )
    }
})