import { defineComponent } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <>
                <demo-block title='基础用法'></demo-block>
            </>
        )
    }
})