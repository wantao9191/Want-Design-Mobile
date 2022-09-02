import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Dialog = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Dialog 对话框</h2>
                    <p>用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>
                <h2>示例</h2>
            </div>
        )
    }
})