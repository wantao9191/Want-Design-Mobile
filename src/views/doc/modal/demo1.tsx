import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const visible1 = ref(false)
        const visible2 = ref(false)
        const visible3 = ref(false)
        const align = ref('')
        const click1 = () => visible1.value = true
        const click2 = (type: string) => {
            align.value = type
            visible2.value = true
        }
        const click3 = () => visible3.value = true
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-button block onClick={click1}>最简单的用法</want-button>
                    <want-modal v-model:visible={visible1.value} title='Modal' v-slots={{ footer: () => { return <want-button block type='primary' onClick={() => { visible1.value = false }}>确定</want-button> } }}>
                        云在青天水在瓶
                    </want-modal>
                </demo-block>
                <demo-block title='对齐方式'>
                    <want-space>
                        <want-button block onClick={() => { click2('center') }}>居中对齐</want-button>
                        <want-button block onClick={() => { click2('left') }}>左侧对齐</want-button>
                    </want-space>
                    <want-modal v-model:visible={visible2.value} align={align.value} title='Modal' v-slots={{ footer: () => { return <want-button block type='primary' onClick={() => { visible2.value = false }}>确定</want-button> } }}>
                        云在青天水在瓶
                    </want-modal>
                </demo-block>
                <demo-block title='点击遮罩关闭'>
                    <want-button block onClick={click3}>点击遮罩关闭</want-button>
                    <want-modal v-model:visible={visible3.value} closeOnMaskClick title='Modal' v-slots={{ footer: () => { return <want-button block type='primary' onClick={() => { visible3.value = false }}>确定</want-button> } }}>
                        云在青天水在瓶
                    </want-modal>
                </demo-block>
            </>
        )
    }
})