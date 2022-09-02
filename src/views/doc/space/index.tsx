import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
import demoBlock1 from './demo1'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Space = defineComponent({
    components: { demoBlock1 },
    setup() {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'block', desc: '是否渲染为块级元素', type: "boolean", default: "false" },
            { attr: 'direction', desc: '间距方向', type: "'vertical' | 'horizontal'", default: "'horizontal'" },
            { attr: 'justify', desc: '主轴对齐方式	', type: "'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'", default: "-" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Space 间距</h2>
                    <p>元素排列中保持相同的宽度。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>适用于多个元素按照水平或垂直方向保持相同的间距。</p>
                <h2>示例</h2>
                <m-demo html={D1} v-slots={{
                    mobile: () => {
                        return (
                            <demo-block1></demo-block1>
                        )
                    }
                }}></m-demo>
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
            </div>
        )
    }
})