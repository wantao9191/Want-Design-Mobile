import { defineComponent, ref } from 'vue'
import { dialog, Toast } from '@wantao/want-ui'
export default defineComponent({
    props: {},
    setup(props, context) {
        const activeName = ref('1')
        const activeName1 = ref('1')
        const activeName2 = ref('1')
        const activeName3 = ref('1')
        const beforeTabChange = (done: any) => {
            dialog.confirm({ content: '是否确认切换标签？' }).then(() => {
                done()
                Toast({text:'切换了标签',duration:1000}).show()
            }).catch(() => {
                Toast({text:'取消切换了标签',duration:1000}).show()
            })
        }
        return () => (<>
            <demo-block title='异步切换'>
                <want-tabs v-model:value={activeName.value} beforeClose={beforeTabChange}>
                    <want-tabs-pane label='选项一' name='1'>内容一</want-tabs-pane>
                    <want-tabs-pane label='选项二' name='2'>内容二</want-tabs-pane>
                    <want-tabs-pane label='选项三' name='3'>内容三</want-tabs-pane>
                </want-tabs>
            </demo-block>
        </>)
    }
})