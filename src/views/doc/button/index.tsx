import { defineComponent } from 'vue'
import Demo1 from './demo1?raw';
import DemoBlock1 from './demo1';
import Demo2 from './demo2?raw'
import DemoBlock2 from './demo2';
type tableArray = {attr?:string,desc?:string,type?:string,default?:string}
export const Button = defineComponent({
    components: { DemoBlock1, DemoBlock2 },
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
        const tableData: Array<tableArray> = [
            { attr: 'block', desc: '是否是块级元素', type: 'boolean', default: 'false' },
            { attr: 'type', desc: '按钮的类型', type: "'default' | 'primary' | 'success' | 'warning' | 'danger'", default: "'default'" },
            { attr: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
            { attr: 'fill', desc: '填充模式', type: "'solid' | 'outline' | 'none'", default: "'solid'" },
            { attr: 'loading', desc: '是否是加载状态', type: 'boolean', default: 'false' },
            { attr: 'size', desc: '大小', type: "'mini' | 'middle' | 'large'", default: "'middle'" },
            { attr: 'round', desc: '是否是圆角', type: 'boolean', default: 'false' },
            { attr: 'square', desc: '是否是直角', type: 'boolean', default: 'false' },
        ]
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
                <h3>属性</h3>
                <m-table data={tableData}>
                    <table-item label='属性' prop='attr'></table-item>
                    <table-item label='说明' prop='desc'></table-item>
                    <table-item label='类型' v-slots={{
                        row: (scope: any) => {
                            return <code>{scope.row.type}</code>
                        }
                    }}></table-item>
                    <table-item label='默认值' v-slots={{
                        row: (scope: any) => {
                            return <code>{scope.row.default}</code>
                        }
                    }}></table-item>
                </m-table>
            </div>
        )
    }
})