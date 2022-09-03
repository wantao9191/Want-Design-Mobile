type menuArr = { label: string, path?: string, children?: Array<menuArr> }
import { defineComponent } from 'vue'
import { onBeforeRouteUpdate, RouterView, useRoute } from 'vue-router'
import { MMenu } from '../../../components/MMenu'
import t from './index.module.scss'
export const Doc = defineComponent({
    components: { MMenu },
    props: {},
    setup(props, context) {
        const route = useRoute()
        const menu: Array<menuArr> = [
            {
                label: 'Install', children: [
                    { label: '快速开始 Quick Start', path: '/doc/installation' },
                ]
            },
            {
                label: 'Basic', children: [
                    { label: '图标 Icon', path: '/doc/icon' },
                    { label: '按钮 Button', path: '/doc/button' },
                ]
            },
            {
                label: 'Layout', children: [
                    { label: '间距 Space', path: '/doc/space' }
                ]
            },
            {
                label: 'Navigation', children: [
                    { label: '标签页 Tabs', path: '/doc/tabs' }
                ]
            },
            {
                label: 'Feedback', children: [
                    { label: '动作面板 ActionSheet', path: '/doc/actionSheet' },
                    { label: '对话框 Dialog', path: '/doc/dialog' },
                    { label: '弹窗 Modal', path: '/doc/modal' },
                    { label: '弹出层 Popup', path: '/doc/popup' },
                    { label: '提示 Toast', path: '/doc/toast' },
                    { label: '滑动操作 SwipeAction', path: '/doc/swipeAction' },
                    { label: '通告栏 NoticeBar', path: '/doc/noticeBar' }
                ]
            },
            {
                label: 'Form', children: [
                    { label: 'Checkbox 复选框', path: '/doc/checkbox' },
                    { label: 'Input 输入框', path: '/doc/input' },
                    { label: 'Picker 选择器', path: '/doc/picker' },
                    { label: 'Switch 开关', path: '/doc/switch' },
                    { label: 'Radio 单选框', path: '/doc/radio' },
                ]
            },
            {
                label: 'Data', children: [
                    { label: 'Collapse 折叠面板', path: '/doc/collapse' },
                    { label: 'Swiper 走马灯', path: '/doc/swiper' }
                ]
            }
        ]
        onBeforeRouteUpdate((to) => {
            document.title = to.meta ? to.meta.title + " | Want-Design" : "Want-Design";
            document.querySelector(".router-content").scrollTop = 0;
        })
        document.title = route.meta ?.title + " | Want-Design" ?? "Want-Design";
        return () => (
            <div class={t['doc-container']}>
                <m-menu menus={menu}></m-menu>
                <div class={[t['router-content'],'router-content']}>
                    <RouterView />
                </div>
            </div>
        )
    }
})