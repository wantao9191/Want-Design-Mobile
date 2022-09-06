import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const value1 = ref(false)
        const value2 = ref(false)
        const value3 = ref(true)
        const value4 = ref(false)
        const value5 = reactive([])
        const value6 = reactive([])
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-checkbox v-model:value={value1.value}></want-checkbox>
                    <want-checkbox v-model:value={value2.value}>
                        有描述的选项
                    </want-checkbox>
                    <want-checkbox v-model:value={value3.value}>
                        默认选中
                    </want-checkbox>
                </demo-block>
                <demo-block title='状态'>
                    <want-checkbox v-model:value={value4.value} disabled>
                        禁用状态
                    </want-checkbox>
                </demo-block>
                <demo-block title='选项组'>
                    <want-checkbox-group v-model:value={value5}>
                        <want-checkbox value='1'>选项一</want-checkbox>
                        <want-checkbox value='2'>选项二</want-checkbox>
                        <want-checkbox value='3'>选项三</want-checkbox>
                    </want-checkbox-group>
                </demo-block>
                <demo-block title='整组禁用'>
                    <want-checkbox-group v-model:value={value6} disabled>
                        <want-checkbox value='1'>选项一</want-checkbox>
                        <want-checkbox value='2'>选项二</want-checkbox>
                        <want-checkbox value='3'>选项三</want-checkbox>
                    </want-checkbox-group>
                </demo-block>
            </>
        )
    }
})