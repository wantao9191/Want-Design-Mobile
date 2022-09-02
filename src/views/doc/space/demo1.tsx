import { defineComponent } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <>
                <demo-block title='水平方向间距'>
                    <want-space>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                        <want-button>item-3</want-button>
                        <want-button>item-4</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='换行'>
                    <want-space>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                        <want-button>item-3</want-button>
                        <want-button>item-4</want-button>
                        <want-button>item-5</want-button>
                        <want-button>item-6</want-button>
                        <want-button>item-7</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='垂直方向间距'>
                    <want-space direction='vertical'>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                        <want-button>item-3</want-button>
                        <want-button>item-4</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='自定义间距大小'>
                    <want-space gutter='20'>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                        <want-button>item-3</want-button>
                        <want-button>item-4</want-button>
                        <want-button>item-5</want-button>
                        <want-button>item-6</want-button>
                    </want-space>
                </demo-block>
                <demo-block title='对齐方式'>
                    <want-space justify='center'>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                    </want-space>
                    <want-space justify='flex-end'>
                        <want-button>item-1</want-button>
                        <want-button>item-2</want-button>
                    </want-space>
                </demo-block>
            </>
        )
    }
})