import { defineComponent } from 'vue'
export default defineComponent({
    props: {},
    setup(props, { slots }) {
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-swipe-action v-slots={{
                        rightActions: () => <>
                            <want-button type='danger'>删除</want-button>
                            <want-button>取消</want-button>
                        </>
                    }}>基础滑动操作</want-swipe-action>
                </demo-block>
                <demo-block title='前置按钮'>
                    <want-swipe-action v-slots={{
                        leftActions: () => <want-button type='primary'>置顶</want-button>,
                        rightActions: () => <>
                            <want-button type='danger'>删除</want-button>
                            <want-button>取消</want-button>
                        </>
                    }}>前置按钮</want-swipe-action>
                </demo-block>
            </>
        )
    }
})