import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Popup = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Popup 弹出层</h2>
                    <p>从屏幕滑出或弹出一块自定义内容区。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示。</p>
                <h2>示例</h2>
            </div>
        )
    }
})