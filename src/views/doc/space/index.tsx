import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
import demoBlock1 from './demo1'
export const Space = defineComponent({
    components: { demoBlock1 },
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Space 间距</h2>
                    <p>元素排列中保持相同的宽度。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于多个元素按照水平或垂直方向保持相同的间距。</p>
                <h2>示例</h2>
                <m-demo html={D1} v-slots={{
                    mobile: () => {
                        return (
                            <demo-block1></demo-block1>
                        )
                    }
                }}></m-demo>
            </div>
        )
    }
})