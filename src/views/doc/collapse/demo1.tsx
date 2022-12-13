import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const states  = reactive({active:[]})
        const active1 = ref('')
        const active2 = ref('')
        const active3 = ref('')
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-collapse v-model:value={states.active}>
                        <want-collapse-pane title='第一项' name='1'>第一项内容</want-collapse-pane>
                        <want-collapse-pane title='第二项' name='2'>第二项内容</want-collapse-pane>
                        <want-collapse-pane title='第三项' name='3'>第三项内容</want-collapse-pane>
                        <want-collapse-pane title='第四项' name='4'>第四项内容</want-collapse-pane>
                    </want-collapse>
                </demo-block>
                <demo-block title='手风琴模式'>
                    <want-collapse v-model:value={active1.value} accordion>
                        <want-collapse-pane title='第一项' name='1'>第一项内容</want-collapse-pane>
                        <want-collapse-pane title='第二项' name='2'>第二项内容</want-collapse-pane>
                        <want-collapse-pane title='第三项' name='3'>第三项内容</want-collapse-pane>
                        <want-collapse-pane title='第四项' name='4'>第四项内容</want-collapse-pane>
                    </want-collapse>
                </demo-block>
                <demo-block title='自定义图标'>
                    <want-collapse v-model:value={active2.value}>
                        <want-collapse-pane title='第一项' name='1' v-slots={{rightIcon:()=><want-icon name='holder' />}}>第一项内容</want-collapse-pane>
                        <want-collapse-pane title='第二项' name='2' v-slots={{rightIcon:()=><want-icon name='heart' />}}>第二项内容</want-collapse-pane>
                        <want-collapse-pane title='第三项' name='3' v-slots={{rightIcon:()=><want-icon name='hourglass' />}}>第三项内容</want-collapse-pane>
                        <want-collapse-pane title='第四项' name='4' v-slots={{rightIcon:()=><want-icon name='info' />}}>第四项内容</want-collapse-pane>
                    </want-collapse>
                </demo-block>
                <demo-block title='禁用选项'>
                    <want-collapse v-model:value={active3.value}>
                        <want-collapse-pane title='第一项' disabled name='1'>第一项内容</want-collapse-pane>
                        <want-collapse-pane title='第二项' name='2'>第二项内容</want-collapse-pane>
                        <want-collapse-pane title='第三项' disabled name='3'>第三项内容</want-collapse-pane>
                        <want-collapse-pane title='第四项' name='4'>第四项内容</want-collapse-pane>
                    </want-collapse>
                </demo-block>
            </>
        )
    }
})