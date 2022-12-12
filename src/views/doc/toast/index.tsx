import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Toast = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'text', desc: '提示类容', type: 'string', default: "''" },
            { attr: 'duration', desc: '显示时长，即多少秒后关闭，0||不传为不自动关闭', type: 'number', default: '0' },
            { attr: 'mask', desc: '是否显示遮罩', type: 'boolean', default: 'false' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Toast 提示</h2>
                    <p>对操作结果的轻量级反馈，无需用户操作即可自行消失。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于页面内容的变化不能直接反应操作结果时使用。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='toast-demo1'></m-demo>
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