import { ref, defineComponent, onMounted, reactive, computed, nextTick } from "vue";
import t from './index.module.scss'
export const MFixedMenu = defineComponent({
    props: {},
    setup(props, { emit }) {
        const arrs: Array<string> = reactive([])
        const index = ref(0 as number)
        const fixMenu = ref(null as HTMLElement | null)
        const top = computed(() => {
            const item = fixMenu.value?.querySelectorAll('.fixed-menu-item')[index.value]
            return (item as HTMLElement)?.offsetTop ?? 0
        })
        const click = (i: number) => {
            const $main = document.querySelector('.router-content')?.parentNode as HTMLDivElement
            const nodes = document.querySelectorAll('.router-content h3')[i] as HTMLElement
            $main.scrollTo(0, nodes.offsetTop - nodes.clientHeight)
            index.value = i
        }
        nextTick(() => {
            const $main = document.querySelector('.router-content')?.parentNode as HTMLDivElement
            $main.onscroll = () => {
                const navs = document.querySelectorAll('.router-content h3')
                for (let i = 0; i < navs.length; i++) {
                    let n = navs[i] as HTMLElement
                    const { top } = n.getBoundingClientRect()
                    if (top > 0 && top < 100) {
                        if (index.value != i) index.value = i
                    }
                }
            }
        })
        onMounted(() => {
            const nodes = document.querySelectorAll('.router-content h3')
            for (let i = 0; i < nodes.length; i++) {
                arrs.push(nodes[i].innerHTML)
            }
        })

        return () => (
            <div class={t['m-fixed-menu']} ref={fixMenu}>
                <div class={t.wrap}>
                    <div class={t['wrap-content']}>
                        <ul>
                            {arrs.map((m: string, i: number) => <li class={[i === index.value ? t.active:'','fixed-menu-item']} onClick={() => { click(i) }}>{m}</li>)}
                        </ul>
                        <div class={t['aside-left']} style={{ top: `${top.value}px` }}></div>
                    </div>
                </div>
            </div>
        )
    },
})