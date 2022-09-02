import { defineComponent } from 'vue'
import t from './index.module.scss'
export const ActionSheet = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>ActionSheet 动作面板</h2>
                    <p>从底部弹出的动作菜单面板。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>由用户操作触发，提供一组与当前场景操作相关的两个或多个选项，让用户在不离场的情况下完成操作。</p>
                <h2>示例</h2>
            </div>
        )
    }
})