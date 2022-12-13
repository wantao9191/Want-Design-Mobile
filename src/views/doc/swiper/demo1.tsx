import { defineComponent } from 'vue'
export default defineComponent({
    props: {},
    setup(props, context) {
        const style = {
            height:'20vh',
            textAlign:'center'
        }
        return () => (
            <>
                <demo-block title='基础用法'>
                    <want-swiper>
                        <want-swiper-item style={{background:'lightblue',...style}}>1</want-swiper-item>
                        <want-swiper-item style={{background:'lightcoral',...style}}>2</want-swiper-item>
                        <want-swiper-item style={{background:'lightgreen',...style}}>3</want-swiper-item>
                        <want-swiper-item style={{background:'lightgoldenrodyellow',...style}}>4</want-swiper-item>
                    </want-swiper>
                </demo-block>
                <demo-block title='循环'>
                    <want-swiper loop  activeIndex={3}>
                        <want-swiper-item style={{background:'lightblue',...style}}>1</want-swiper-item>
                        <want-swiper-item style={{background:'lightcoral',...style}}>2</want-swiper-item>
                        <want-swiper-item style={{background:'lightgreen',...style}}>3</want-swiper-item>
                        <want-swiper-item style={{background:'lightgoldenrodyellow',...style}}>4</want-swiper-item>
                    </want-swiper>
                </demo-block>
                <demo-block title='自动播放'>
                    <want-swiper autoplay>
                        <want-swiper-item style={{background:'lightblue',...style}}>1</want-swiper-item>
                        <want-swiper-item style={{background:'lightcoral',...style}}>2</want-swiper-item>
                        <want-swiper-item style={{background:'lightgreen',...style}}>3</want-swiper-item>
                        <want-swiper-item style={{background:'lightgoldenrodyellow',...style}}>4</want-swiper-item>
                    </want-swiper>
                </demo-block>
                <demo-block title='指示器在外部显示'>
                    <want-swiper dotOutside>
                        <want-swiper-item style={{background:'lightblue',...style}}>1</want-swiper-item>
                        <want-swiper-item style={{background:'lightcoral',...style}}>2</want-swiper-item>
                        <want-swiper-item style={{background:'lightgreen',...style}}>3</want-swiper-item>
                        <want-swiper-item style={{background:'lightgoldenrodyellow',...style}}>4</want-swiper-item>
                    </want-swiper>
                </demo-block>
                <demo-block title='隐藏指示器'>
                    <want-swiper indicator={false}>
                        <want-swiper-item style={{background:'lightblue',...style}}>1</want-swiper-item>
                        <want-swiper-item style={{background:'lightcoral',...style}}>2</want-swiper-item>
                        <want-swiper-item style={{background:'lightgreen',...style}}>3</want-swiper-item>
                        <want-swiper-item style={{background:'lightgoldenrodyellow',...style}}>4</want-swiper-item>
                    </want-swiper>
                </demo-block>
            </>
        )
    }
})