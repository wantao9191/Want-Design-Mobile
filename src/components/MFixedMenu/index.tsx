import { computed, defineComponent, onMounted, reactive } from "vue";
import t from './index.module.scss'
export const MFixedMenu = defineComponent({
    props: {},
    setup(props, ctx) {
        const arrs: Array<string> = reactive([]) 
        onMounted(() => {
            const nodes = document.querySelectorAll('.router-content h3')
            for (let i = 0; i < nodes.length; i++) {
                arrs.push(nodes[i].innerHTML)
            }
        })

        return () => (
            <div class={t['m-fiex-menu']}>
                <ul class={t.wrap}>
                    {arrs.map((m: string) => <li>{m}</li>)}
                </ul>
            </div>
        )
    },
})