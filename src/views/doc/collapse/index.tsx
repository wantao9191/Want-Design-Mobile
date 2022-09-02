import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Collapse = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Collapse 折叠面板</h2>
                    <p>可以折叠/展开的内容区域。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
                <h2>示例</h2>
            </div>
        )
    }
})