import { defineComponent } from 'vue'
import { Toast } from '@wantao/want-ui'
export default defineComponent({
    props: {},
    setup(props, context) {
        const click1 = () => {
            Toast({ text: '提示', duration: 1000 }).show()
        }
        const action = Toast({ text: '这条提示不会自动消失！' })
        const click2 = () => {
            action.show()
        }
        const remove = () => {
            action.remove()
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-button block onClick={click1}>轻提示</want-button>
                </demo-block>
                <demo-block title='手动清除'>
                    <want-space>
                        <want-button onClick={click2}>显示</want-button>
                        <want-button onClick={remove}>关闭</want-button>
                    </want-space>
                </demo-block>
            </>
        )
    }
})