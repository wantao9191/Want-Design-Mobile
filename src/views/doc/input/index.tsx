import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Input = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:value', desc: '输入框值', type: 'string', default: '""' },
            { attr: 'clearable', desc: '是否一键清空', type: "boolean", default: "false" },
            { attr: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
            { attr: 'readonly', desc: '是否只读', type: "boolean", default: 'false' },
            { attr: 'maxlength', desc: '最大输入文字数', type: 'number', default: 'null' },
            { attr: 'align', desc: '文字输入方向', type: "'left' | 'center' | 'right'", default: "'left'" },
            { attr: 'showWordLimit', desc: '是否显示文字统计', type: 'boolean', default: 'false' },
            { attr: 'clear', desc: '清空事件', type: 'function', default: 'null' },
            { attr: 'blur', desc: '失去焦点事件', type: 'function', default: 'null' },
            { attr: 'focus', desc: '获得焦点事件', type: 'function', default: 'null' },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'button', desc: '额外操作按钮', type: 'slot', default: 'null' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Input 输入框</h2>
                    <p>通过键盘输入内容，是最基础的表单域包装。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>一般用在表单页进行信息的收集，提供文本框、选择框两种类型。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='input-demo1'></m-demo>
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
                <h3>Slots</h3>
                <m-table data={tableData1}>
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