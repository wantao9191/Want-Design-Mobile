import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Radio = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Radio 单选框</h2>
                    <p>在一组可选项中进行单选。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>单选框所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
                <h2>示例</h2>
            </div>
        )
    }
})