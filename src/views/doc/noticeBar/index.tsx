import { defineComponent } from 'vue'
export const NoticeBar = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>NoticeBar 通告栏</h2>
                    <p>展示一组消息通知。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于当前页面内信息的通知，是一种较醒目的页面内通知方式。</p>
                <h3>示例</h3>
            </div>
        )
    }
})