import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Toast = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Toast 提示</h2>
                    <p>对操作结果的轻量级反馈，无需用户操作即可自行消失。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于页面内容的变化不能直接反应操作结果时使用。</p>
                <h3>示例</h3>
            </div>
        )
    }
})