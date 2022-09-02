import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return () => (
            <>
                <demo-block title='填充模式'>
                    <want-space>
                        <want-button type='primary' fill='solid'>Solid</want-button>
                        <want-button type='primary' fill='outline'>Outline</want-button>
                        <want-button type='primary' fill='none'>None</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='块级按钮'>
                    <want-button type='primary' fill='solid' block>Block Button</want-button>
                </demo-block>
                <demo-block title='按钮尺寸'>
                    <want-space>
                        <want-button type='primary' size='mini'>Mini</want-button>
                        <want-button type='primary' size='middle'>Middle</want-button>
                        <want-button type='primary' size='large'>Large</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='语义按钮'>
                    <want-space>
                        <want-button type='default'>Default</want-button>
                        <want-button type='primary'>Parmary</want-button>
                        <want-button type='success'>Sucess</want-button>
                        <want-button type='warning'>Warning</want-button>
                        <want-button type='danger'>Danger</want-button>
                    </want-space>
                </demo-block>
            </>
        )
    }
})
