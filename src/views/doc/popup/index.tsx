import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Popup = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:visible', desc: '是否展示popup', type: 'boolean', default: 'false' },
            { attr: 'round', desc: '是否是用圆角样式', type: "'boolean'", default: "false" },
            { attr: 'position', desc: '打开位置', type: "'string'", default: "'bottom'" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Popup 弹出层</h2>
                    <p>从屏幕滑出或弹出一块自定义内容区。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于展示弹窗、信息提示、选择输入、切换等内容，支持多个弹出层叠加展示。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='popup-demo1'></m-demo>
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