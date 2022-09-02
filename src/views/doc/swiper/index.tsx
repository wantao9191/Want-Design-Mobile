import { defineComponent } from 'vue'
import t from './index.module.scss'
export const Swiper = defineComponent({
    props: {},
    setup(props, context) {
        return () => (
            <div class='demo-container'>
                <header>
                    <h2>Swiper 走马灯</h2>
                    <p>一组轮播的区域。</p>
                </header>
                <h3>何时使用</h3>
                <p class={'desc'}>当有一组平级的内容。当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。常用于一组图片或卡片轮播。</p>
                <h2>示例</h2>
            </div>
        )
    }
})