import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, { slots }) {
        const visible = ref(true)
        const close = () => { visible.value = false }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-space direction='vertical'>
                        <want-noticebar>默认</want-noticebar>
                        <want-noticebar type='info'>信息</want-noticebar>
                        <want-noticebar type='alert'>警告</want-noticebar>
                        <want-noticebar type='error'>错误</want-noticebar>
                    </want-space>
                </demo-block>
                <demo-block title='可关闭'>
                    <want-noticebar closeable v-show={visible.value} type='alert' onClose={close}>这条通知可以关闭....</want-noticebar>
                </demo-block>
                <demo-block title='自定义功能区'>
                    <want-noticebar v-slots={{ right: () => '查看信息' }}>自定义右侧功能区</want-noticebar>
                </demo-block>
            </>
        )
    }
})