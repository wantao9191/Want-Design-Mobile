import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Radio = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'value', desc: '是否选中', type: 'boolean', default: 'false' },
            { attr: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'value', desc: '复选框组选中值', type: 'array', default: '[]' },
            { attr: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
            { attr: 'onChange', desc: '复选框变化事件', type: '(value:选中值)=>{}', default: 'null' },

        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Radio 单选框</h2>
                    <p>在一组可选项中进行单选。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>单选框所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='radio-demo1'></m-demo>
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
                <h3 class='table-h'>Group</h3>
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