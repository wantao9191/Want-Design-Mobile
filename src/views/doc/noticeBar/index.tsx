import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const NoticeBar = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'type', desc: '通告栏类型', type: "'default' | 'info' | 'warning' | 'error'", default: "'default'" },
            { attr: 'closeable', desc: '是否关闭', type: "boolean", default: "false" },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'default', desc: '通告栏文本', type: "slot", default: "null" },
            { attr: 'right', desc: '自定义操作栏', type: "slot", default: "null" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>NoticeBar 通告栏</h2>
                    <p>展示一组消息通知。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于当前页面内信息的通知，是一种较醒目的页面内通知方式。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='notice-bar-demo1'></m-demo>
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