import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Input = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Input 输入框</h2>
                    <p>通过键盘输入内容，是最基础的表单域包装。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>一般用在表单页进行信息的收集，提供文本框、选择框两种类型。</p>
                <h2>示例</h2>
            </div>
        )
    }
})