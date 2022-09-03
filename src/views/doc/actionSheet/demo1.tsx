import { defineComponent, ref } from "vue";
import { Toast, actionSheet } from "@wantao/want-ui";
export default defineComponent({
    setup() {
        const visible1 = ref(false)
        const visible2 = ref(false)
        const visible3 = ref(false)
        const visible4 = ref(false)
        const click1 = () => {
            visible1.value = true
        }
        const click2 = () => {
            visible2.value = true
        }
        const click3 = () => {
            visible3.value = true
        }
        const click4 = () => {
            visible4.value = true
        }
        const click5 = () => {
            actionSheet({
                title:'指令式调用',
                actions: [
                    { label: '选项一' },
                    { label: '选项二' },
                    { label: '选项三' }
                ]
            }).show()
        }
        const beforeClose = (action: string, instance: any, done: any) => {
            if (action === 'action') {
                Toast({ text: '选择了：' + instance.label, duration: 2000 }).show()
            } else {
                done()
                Toast({ text: '关闭了动作面板', duration: 1000 }).show()
            }
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-space>
                        <want-button onClick={click1}>最简单用法</want-button>
                        <want-button onClick={click2}>标题和取消按钮</want-button>
                    </want-space>
                    <want-sheet-action
                        v-model:visible={visible1.value}
                        actions={[{ label: '选项一' }, { label: '选项二' }, { label: '选项三' }]}
                    ></want-sheet-action>
                    <want-sheet-action
                        v-model:visible={visible2.value}
                        title='请选择'
                        actions={[{ label: '选项一' }, { label: '选项二' }, { label: '选项三' }]}
                        showCancel
                    ></want-sheet-action>
                </demo-block>
                <demo-block title='选项状态'>
                    <want-button block onClick={click3}>禁用选项和危险选项</want-button>
                    <want-sheet-action
                        v-model:visible={visible3.value}
                        title='禁用选项和危险选项'
                        actions={
                            [{ label: '选项一' },
                            { label: '选项二', disabled: true },
                            { label: '选项三', danger: true }]
                        }
                        showCancel
                    ></want-sheet-action>
                </demo-block>
                <demo-block title='事件处理'>
                    <want-button block onClick={click4}>事件处理</want-button>
                    <want-sheet-action
                        v-model:visible={visible4.value}
                        title='禁用选项和危险选项'
                        actions={
                            [{ label: '选项一' },
                            { label: '选项二' },
                            { label: '选项三' }]
                        }
                        beforeClose={beforeClose}
                        showCancel
                    ></want-sheet-action>
                </demo-block>
                <demo-block title='指令式调用'>
                    <want-button block onClick={click5}>指令式调用</want-button>
                </demo-block>
            </>
        )
    }
})