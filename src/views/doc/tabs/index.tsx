import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Tabs = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Tabs 标签页</h2>
                    <p>内容组之间进行导航切换。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>当前内容需要分成同层级结构的组，进行内容切换展示，常用在表单或者列表的顶部。</p>
                <h2>示例</h2>
            </div>
        )
    }
})