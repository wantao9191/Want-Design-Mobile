import { defineComponent, ref } from 'vue'
import { dialog } from '@wantao/want-ui'
export default defineComponent({
    props: {},
    setup(props, context) {
        const visible1 = ref(false)
        const click1 = () => {
            dialog.alert({ content: '云在青天水在瓶' }).then(() => { }).catch(() => { })
        }
        const click2 = () => {
            dialog.confirm({ content: '云在青天水在瓶' }).then(() => { }).catch(() => { })
        }
        const click3 = () => {
            dialog.confirm({
                content: '云在青天水在瓶',
                confirmButtonText: '删除',
                confirmButtonType: 'danger'
            }).then(() => { }).catch(() => { })
        }
        const click4 = () => {
            dialog.confirm({
                content: '云在青天水在瓶',
                beforeClose: (action: string, instance: any, done: any) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true
                        setTimeout(() => {
                            done()
                        }, 3000);
                    } else {
                        done()
                    }

                }
            })
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-button block onClick={click1}>最简单的对话框</want-button>
                </demo-block>
                <demo-block title='确认对话框'>
                    <want-button block onClick={click2}>确认对话框</want-button>
                </demo-block>
                <demo-block title='自定义按钮'>
                    <want-button block onClick={click3}>自定义按钮</want-button>
                </demo-block>
                <demo-block title='异步执行'>
                    <want-button block onClick={click4}>异步执行</want-button>
                </demo-block>
            </>
        )
    }
})