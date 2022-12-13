import { defineComponent } from 'vue'
import demo1 from './demo1?raw'
type tableArray = { attr?: string, desc?: string, type?: string, default?: string }
export const Swiper = defineComponent({
    props: {},
    setup(props, context) {
        const D1 = Prism.highlight(
            demo1,
            Prism.languages.javascript,
            "html"
        )
        const tableData: Array<tableArray> = [
            { attr: 'activeIndex', desc: '初始轮播索引', type: 'number', default: '0' },
            { attr: 'autoplay', desc: '是否自动播放', type: "'boolean'", default: "false" },
            { attr: 'loop', desc: '是否循环播放', type: "'boolean'", default: "false" },
            { attr: 'indicator', desc: '是否显示指示器', type: "'boolean'", default: "true" },
            { attr: 'dotOutside', desc: '指示器外部显示', type: "'boolean'", default: "false" },
        ]
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Swiper 走马灯</h2>
                    <p>一组轮播的区域。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>当有一组平级的内容。当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。常用于一组图片或卡片轮播。</p>
                <h3>示例</h3>
                <m-demo html={D1} params='swiper-demo1'></m-demo>
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