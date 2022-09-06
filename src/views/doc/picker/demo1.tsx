import { defineComponent, ref, reactive } from 'vue'
interface child { label: string, value?: string }
interface columsArray { [index: number]: Array<child> }
interface valueArray { [index: number]: string | number }
export default defineComponent({
    props: {},
    setup(props, context) {
        const visible = ref(false)
        let value: valueArray = reactive(['周日', '下午'])
        const colums: columsArray = [
            [{ label: '周一' }, { label: '周二' },
            { label: '周三' }, { label: '周四' }, { label: '周五' }, { label: '周六' }, { label: '周日' },],
            [
                { label: '上午', value: 'am' },
                { label: '下午', value: 'pm' },
            ],
        ]
        const click1 = () => {
            visible.value = true
        }
        const confirm = () => {

        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-button onClick={click1}>选择</want-button>
                    <want-picker v-model:visible={visible.value} columns={colums} v-model:value={value} onConfirm={confirm}></want-picker>
                </demo-block>
            </>
        )
    }
})