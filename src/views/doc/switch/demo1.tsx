import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const value1 = ref(false)
        const value2 = ref(true)
        const value3 = ref(false)
        const value4 = ref(true)
        const value5 = ref(true)
        const value6 = ref(true)
        const value7 = ref(false)
        const value8 = ref(true)
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-switch v-model:value={value1.value}></want-switch>
                </demo-block>
                <demo-block title='有默认值'>
                    <want-switch v-model:value={value2.value}></want-switch>
                </demo-block>
                <demo-block title='自定义文字'>
                    <want-switch v-model:value={value3.value} activeText='开' inactiveText='关'></want-switch>
                </demo-block>
                <demo-block title='自定义样式'>
                    <want-space>
                        <want-switch type='primary' v-model:value={value4.value} ></want-switch>
                        <want-switch type='danger' v-model:value={value5.value}></want-switch>
                        <want-switch type='success' v-model:value={value6.value} ></want-switch>
                    </want-space>
                </demo-block>
                <demo-block title='禁用状态'>
                    <want-space>
                        <want-switch v-model:value={value7.value} disabled ></want-switch>
                        <want-switch v-model:value={value8.value} disabled ></want-switch>
                    </want-space>
                </demo-block>
                <demo-block title='不同尺寸'>
                    <want-space>
                        <want-switch v-model:value={value7.value} size='small'></want-switch>
                        <want-switch v-model:value={value8.value} ></want-switch>
                    </want-space>
                </demo-block>
            </>
        )
    }
})