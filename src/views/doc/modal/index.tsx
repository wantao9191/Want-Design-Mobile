import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Modal = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'v-model:visible', desc: '是否展示 modal', type: 'boolean', default: 'false' },
            { attr: 'title', desc: 'modal 标题', type: "string", default: '""' },
            { attr: 'align', desc: '对齐方式', type: "'center' | 'left'", default: '"left"' },
            { attr: 'closeOnMaskClick', desc: '点击遮罩关闭', type: 'boolean', default: 'false' },
        ]
        const tableData1: Array<tableArray> = [
            { attr: 'title', desc: '自定义标题', type: 'slot', default: 'null' },
            { attr: 'footer', desc: '自定义按钮', type: "slot", default: 'null' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Modal 弹窗</h2>
                    <p>用于重要信息的告知或操作的反馈，并附带少量的选项供用户进行操作。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='modal-demo1'></m-demo>
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
                <h3 class='table-h'>Slot</h3>
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