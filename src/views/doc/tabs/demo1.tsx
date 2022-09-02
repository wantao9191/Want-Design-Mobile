import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const activeName = ref('1')
        const activeName1 = ref('1')
        const activeName2 = ref('1')
        const activeName3 = ref('1')
        return () => (<>
            <demo-block title='基础用法'>
                <want-tabs v-model:value={activeName.value}>
                    <want-tabs-pane label='选项一' name='1'>内容一</want-tabs-pane>
                    <want-tabs-pane label='选项二' name='2'>内容二</want-tabs-pane>
                    <want-tabs-pane label='选项三' name='3'>内容三</want-tabs-pane>
                </want-tabs>
            </demo-block>
            <demo-block title='超长自动滚动'>
                <want-tabs v-model:value={activeName1.value}>
                    <want-tabs-pane label='选项一' name='1'>内容一</want-tabs-pane>
                    <want-tabs-pane label='选项二' name='2'>内容二</want-tabs-pane>
                    <want-tabs-pane label='选项三' name='3'>内容三</want-tabs-pane>
                    <want-tabs-pane label='选项四' name='5'>内容四</want-tabs-pane>
                    <want-tabs-pane label='选项五' name='6'>内容五</want-tabs-pane>
                    <want-tabs-pane label='选项六' name='7'>内容六</want-tabs-pane>
                    <want-tabs-pane label='选项七' name='8'>内容七</want-tabs-pane>
                    <want-tabs-pane label='选项八' name='9'>内容八</want-tabs-pane>
                    <want-tabs-pane label='选项九' name='10'>内容九</want-tabs-pane>
                </want-tabs>
            </demo-block>
            <demo-block title='禁用状态'>
                <want-tabs v-model:value={activeName2.value}>
                    <want-tabs-pane label='选项一' name='1'>内容一</want-tabs-pane>
                    <want-tabs-pane label='选项二' name='2' disabled>内容二</want-tabs-pane>
                    <want-tabs-pane label='选项三' name='3' disabled>内容三</want-tabs-pane>
                </want-tabs>
            </demo-block>
            <demo-block title='插槽标签'>
                <want-tabs v-model:value={activeName3.value}>
                    <want-tabs-pane label='选项一' name='1'>内容一</want-tabs-pane>
                    <want-tabs-pane label='选项二' name='2' disabled>内容二</want-tabs-pane>
                    <want-tabs-pane label='选项三' name='3'
                        v-slots={{ default: () => 'slot-选项三' }}
                    >内容三</want-tabs-pane>
                </want-tabs>
            </demo-block>
        </>)
    }
})