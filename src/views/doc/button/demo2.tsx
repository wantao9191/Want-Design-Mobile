import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup() {
        const loading = ref(false)
        const click = () => {
            loading.value = true
            setTimeout(() => {
                loading.value = false
            }, 2000);
        }
        return () => (
            <>
                <demo-block title='形状'>
                    <want-space>
                        <want-button type='primary'>Normal</want-button>
                        <want-button type='primary' round>Round</want-button>
                        <want-button type='primary' square>Square</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='加载状态'>
                    <want-space>
                        <want-button type='primary' fill='solid' loading>Loading...</want-button>
                        <want-button
                            type='primary'
                            fill='solid'
                            loading={loading.value}
                            onClick={click}>
                            Click Loading...
                        </want-button>
                    </want-space>
                </demo-block>
                <demo-block title='禁用状态'>
                    <want-space>
                        <want-button disabled>Disabled</want-button>
                        <want-button type='primary' disabled>Disabled</want-button>
                    </want-space>
                </demo-block>
            </>
        )
    }
})
