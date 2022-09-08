import { defineComponent, ref, reactive } from 'vue'
interface child { label: string, value?: string }
interface columsArray { [index: number]: Array<child> }
interface valueArray { [index: number]: string | number }
export default defineComponent({
    props: {},
    setup(props, context) {
        const visible = ref(false)
        const visible1 = ref(false)
        let value: valueArray = reactive([])
        let value1: valueArray = reactive([])
        const valueText = ref('未选择')
        const colums: columsArray = [
            [{ label: '周一' }, { label: '周二' },
            { label: '周三' }, { label: '周四' }, { label: '周五' }, { label: '周六' }, { label: '周日' },],
            [
                { label: '上午', value: 'am' },
                { label: '下午', value: 'pm' },
            ],
        ]
        const click = () => {
            visible.value = true
        }
        const click1 = () => {
            visible1.value = true
        }
        const confirm = () => {
            valueText.value = value1.join('-')
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-button onClick={click}>选择</want-button>
                    <want-picker v-model:visible={visible.value} columns={colums} v-model:value={value} ></want-picker>
                </demo-block>
                <demo-block title='渲染所选值'>
                    <want-button onClick={click1}>选择</want-button>{valueText.value}
                    <want-picker v-model:visible={visible1.value} columns={colums} v-model:value={value1} onConfirm={confirm}></want-picker>
                </demo-block>
            </>
        )
    }
})