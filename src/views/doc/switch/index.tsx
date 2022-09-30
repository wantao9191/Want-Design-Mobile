import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Switch = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:value', desc: 'switch 绑定值', type: 'boolean', default: 'false' },
            { attr: 'disabled', desc: '是否禁用 switch', type: 'boolean', default: 'false' },
            { attr: 'type', desc: 'switch 样式', type: "'primary' | 'danger' | 'success'", default: "'primary'" },
            { attr: 'size', desc: 'switch 尺寸', type: "'small' | 'noraml'", default: "'normal'" },
            { attr: 'activeText', desc: '选中时文字', type: "string", default: "''" },
            { attr: 'inactiveText', desc: '未选中时文字', type: "string", default: "''" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Switch 开关</h2>
                    <p>开关选择器。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>需要表示开关状态/两种状态之间的切换时。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='switch-demo1'></m-demo>
                <h3 class='table-h'>属性</h3>
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