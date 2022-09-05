import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Switch = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Switch 开关</h2>
                    <p>开关选择器。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>需要表示开关状态/两种状态之间的切换时。</p>
                <h3>示例</h3>
            </div>
        )
    }
})