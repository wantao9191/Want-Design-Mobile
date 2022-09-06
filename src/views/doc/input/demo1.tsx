import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
        const value4 = ref('')
        return () => (
            <>
                <demo-block title='基本的输入框组件'>
                    <want-input v-model:value={value1.value} placeholder='请输入' />
                </demo-block>
                <demo-block title='可清除的输入框组件'>
                    <want-input v-model:value={value2.value} placeholder='请输入' clearable />
                </demo-block>
                <demo-block title='禁用状态'>
                    <want-input v-model:value={value3.value} placeholder='被禁用' disabled />
                </demo-block>
                <demo-block title='只读'>
                    <want-input v-model:value={value4.value} placeholder='只读状态' readonly />
                </demo-block>
                <demo-block title='右侧对齐'>
                    <want-input v-model:value={value4.value} placeholder='右侧对齐' align='right' />
                </demo-block>
                <demo-block title='额外的操作'>
                    <want-input
                        v-model:value={value4.value}
                        placeholder='请输入'
                        v-slots={
                            {
                                button: () => <want-button type='primary' size='mini'>
                                    确定
                                </want-button>
                            }
                        }></want-input>
                </demo-block>
            </>
        )
    }
})