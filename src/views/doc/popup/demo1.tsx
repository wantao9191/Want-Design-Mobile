import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const visible1 = ref(false)
        const visible2 = ref(false)
        const visible3 = ref(false)
        const position = ref('bottom')
        const click1 = (pos: string = 'bottom') => {
            visible1.value = true
            position.value = pos
        }
        const click2 = () => {
            visible2.value = true
        }
        const click3 = () => {
            visible3.value = true
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-space direction='vertical'>
                        <want-button block onClick={() => { click1('bottom') }}>底部弹出</want-button>
                        <want-button block onClick={() => { click1('top') }}>顶部弹出</want-button>
                        <want-button block onClick={() => { click1('left') }}>左部弹出</want-button>
                        <want-button block onClick={() => { click1('right') }}>右部弹出</want-button>
                    </want-space>
                    <want-popup v-model:visible={visible1.value} position={position.value}>
                        <div style={{ padding: '20px' }}>
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                        </div>
                    </want-popup>
                </demo-block>
                <demo-block title='自定义样式'>
                    <want-space direction='vertical'>
                        <want-button block onClick={click2}>圆角</want-button>
                        <want-button block onClick={click3}>内容超长滚动</want-button>
                    </want-space>
                    <want-popup v-model:visible={visible2.value} round>
                        <div style={{ padding: '20px' }}>
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                        </div>
                    </want-popup>
                    <want-popup v-model:visible={visible3.value}>
                        <div style={{ padding: '20px' }}>
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                            Labore magna quis enim mollit. Occaecat sint non laborum aliqua duis esse velit do consectetur ex mollit tempor ullamco exercitation nulla. Velit minim sit qui adipisicing adipisicing tempor ipsum ullamco cupidatat sint ullamco laboris velit proident dolore. Pariatur laborum laborum adipisicing id ad Lorem ut sint pariatur ipsum non velit ipsum non.
                        </div>
                    </want-popup>
                </demo-block>
            </>
        )
    }
})