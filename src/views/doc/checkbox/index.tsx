import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Checkbox = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Checkbox 复选框</h2>
                    <p>在一组可选项中进行多选。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>在一组可选项中进行多项选择时。</p>
                <h2>示例</h2>
            </div>
        )
    }
})