import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Picker = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:value', desc: 'picker绑定值', type: 'string', default: '""' },
            { attr: 'v-model:visible', desc: '是否展示picker', type: 'boolean', default: 'false' },
            { attr: 'columns', desc: 'picker选项', type: "array", default: "[]" },
            { attr: 'confirm', desc: '选择回调', type: 'function', default: 'null' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Picker 选择器</h2>
                    <p>显示一个或多个选项集合的的可滚动列表。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>提供一组或多组关联选项供用户选择。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='picker-demo1'></m-demo>
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