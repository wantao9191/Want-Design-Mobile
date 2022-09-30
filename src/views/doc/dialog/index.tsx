import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Dialog = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'confirmButtonText', desc: 'confirm按钮文字', type: 'string', default: '确定' },
            { attr: 'cancelButtonText', desc: 'cancel按钮文字', type: 'string', default: '取消' },
            { attr: 'confirmButtonType', desc: 'confirm按钮类型', type: "'primary' | 'success' | 'danger' | 'warning'", default: '""' },
            { attr: 'cancelButtonType', desc: 'cancel按钮类型', type: "'primary' | 'success' | 'danger' | 'warning'", default: '""' },
            { attr: 'content', desc: '对话框内容', type: 'string', default: '""' },
            { attr: 'beforeClose', desc: '异步关闭', type: 'function', default: 'null' },
            { attr: 'closeOnMaskClick', desc: '点击遮罩关闭', type: 'boolean', default: 'false' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Dialog 对话框</h2>
                    <p>用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='dialog-demo1'></m-demo>
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