import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
import demoBlock1 from './demo1'
import demo2 from './demo2?raw'
import demoBlock2 from './demo2'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Tabs = defineComponent({
    components: { demoBlock1, demoBlock2 },
    setup() {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const D2 = Prism.highlight(
            demo2,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:value', desc: 'tabs显示页', type: "'string' | 'number'", default: "' '" },
            { attr: 'beforeClose', desc: '异步操作', type: 'function(done:"关闭事件")=>{}', default: 'null' },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'name', desc: '选项卡Key，控制选卡显示', type:"'string' | 'number'", default: "' '" },
            { attr: 'label', desc: '选项卡名称', type:"'string' | 'number'", default: "' '" },
            { attr: 'disabled', desc: '是否禁用', type: "boolean", default: "false" },
            { attr: 'slot:label', desc: '选项卡名称插槽', type: "-", default: "-" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Tabs 标签页</h2>
                    <p>内容组之间进行导航切换。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>当前内容需要分成同层级结构的组，进行内容切换展示，常用在表单或者列表的顶部。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='tabs-demo1'></m-demo>
                <m-demo html={D2} params='tabs-demo2'></m-demo>
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
                <h3>Pane</h3>
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