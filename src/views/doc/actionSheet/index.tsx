import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const ActionSheet = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'actions', desc: '面板选项列表', type: 'Array', default: '[]' },
            { attr: 'title', desc: '面板标题', type: "String", default: "''" },
            { attr: 'v-model:visible', desc: '面板显示控制', type: 'boolean', default: 'false' },
            { attr: 'showCancel', desc: '是否显示取消按钮', type: "boolean", default: "false" },
            { attr: 'cancelText', desc: '取消按钮文本', type: 'String', default: '取消' },
            { attr: 'closeOnMaskClick', desc: '背景点击消失', type: "boolean", default: "false" },
            { attr: 'beforeClose', desc: '异步操作', type: 'function(action:"动作种类",instance:"选中项",done:"关闭事件")=>{}', default: 'null' },
            { attr: 'propOptions', desc: 'actions字段控制', type: 'object', default: "{ label: 'label', value: 'value' }" },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'label', desc: '选项名称', type: 'string', default: "''" },
            { attr: 'disabled', desc: '是否禁用选项', type: "boolean", default: "false" },
            { attr: 'danger', desc: '选项标红', type: 'boolean', default: 'false' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>ActionSheet 动作面板</h2>
                    <p>从底部弹出的动作菜单面板。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>由用户操作触发，提供一组与当前场景操作相关的两个或多个选项，让用户在不离场的情况下完成操作。</p>
                <h2>示例</h2>
                <m-demo html={D1} params='actionSheet-demo1'></m-demo>
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
                <h3>Actions</h3>
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