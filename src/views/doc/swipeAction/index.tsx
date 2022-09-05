import { defineComponent } from 'vue'
import t from './index.module.scss'
export const SwipeAction = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>SwipeAction 滑动操作</h2>
                    <p>列表的功能扩展。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>通过滑动操作来展示隐藏的功能菜单。</p>
                <h3>示例</h3>
            </div>
        )
    }
})