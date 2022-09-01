import { defineComponent } from 'vue'
import Demo1 from './demo1?raw';
import DemoBlock1 from './demo1';
import Demo2 from './demo2?raw'
import DemoBlock2 from './demo2';

export const Button = defineComponent({
    components: { DemoBlock1,DemoBlock2 },
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            Demo1,
            Prism.languages.javascript,
            "html"
        )
        const D2 = Prism.highlight(
            Demo2,
            Prism.languages.javascript,
            "html"
        )
        return () => (
            <div class={'demo-container'}>
                <header>
                    <h2>Button 按钮</h2>
                    <p>用于开始一个即时操作。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                <h2>示例</h2>
                <m-demo html={D1} v-slots={{
                    mobile: () => {
                        return (
                            <>
                                <demo-block1></demo-block1>
                            </>)
                    }
                }}></m-demo>
                <m-demo html={D2} v-slots={{
                    mobile: () => {
                        return (
                            <>
                                <demo-block2></demo-block2>
                            </>)
                    }
                }}></m-demo>
            </div>
        )
    }
})