import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Picker = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Picker 选择器</h2>
                    <p>显示一个或多个选项集合的的可滚动列表。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>提供一组或多组关联选项供用户选择。</p>
                <h3>示例</h3>
            </div>
        )
    }
})