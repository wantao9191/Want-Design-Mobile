import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const value1 = ref(false)
        const value2 = ref(false)
        const value3 = ref('')
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-radio value={value1.value} />
                    <want-radio value={value2.value} >有描述的单选框</want-radio>
                </demo-block>
                <demo-block title='选项组'>
                    <want-radio-group v-model:value={value3.value}>
                        <want-radio value='1'>选项一</want-radio>
                        <want-radio value='2'>选项二</want-radio>
                        <want-radio value='3'>选项三</want-radio>
                    </want-radio-group>
                </demo-block>
                <demo-block title='禁用选项'>
                    <want-radio disabled>禁用选项</want-radio>
                </demo-block>
                <demo-block title='禁用选项组'>
                    <want-radio-group v-model:value={value3.value} disabled>
                        <want-radio value='1'>选项一</want-radio>
                        <want-radio value='2'>选项二</want-radio>
                        <want-radio value='3'>选项三</want-radio>
                    </want-radio-group>
                </demo-block>
            </>
        )
    }
})