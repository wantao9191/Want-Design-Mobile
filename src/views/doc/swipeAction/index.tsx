import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const SwipeAction = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'default', desc: '默认内容', type: 'slot', default: 'null' },
            { attr: 'leftActions', desc: '左侧操作模块', type: 'slot', default: 'null' },
            { attr: 'right', desc: '右侧操作模块', type: 'slot', default: 'null' },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>SwipeAction 滑动操作</h2>
                    <p>列表的功能扩展。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>通过滑动操作来展示隐藏的功能菜单。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='swiper-action-demo1'></m-demo>
                <h3 class='table-h'>Slots</h3>
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