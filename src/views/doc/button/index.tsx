import { defineComponent } from 'vue'
export const Button = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class={'demo-container'}>
                <header>
                    <h2>Button 按钮</h2>
                    <p>用于开始一个即时操作。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                <h2>示例</h2>
                <main class={'example'}>
                    <div class={'code'}></div>
                    <div class={'mobile'}></div>
                </main>
            </div>
        )
    }
})