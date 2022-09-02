import { computed, ComputedGetter, defineComponent } from 'vue'
import t from './index.module.scss'
export const MTable = defineComponent({
    props: {
        data: { type: Array, default: [] }
    },
    setup(props, { slots }) {
        const items: any = computed(() => {
            return slots.default?.()
        })
        const colums: any = computed(() => {
            const rows = slots.default?.()
            const result = props.data.map((d, i) => {
                return { rows, scope: d }
            })
            return result
        })
        return () => (
            <table class={t.table}>
                <thead>
                    {items.value.map((i: any) => {
                        return (<th>{i.props.label}</th>)
                    })}
                </thead>
                <tbody>
                    {colums.value.map((d: any, v: number) => {
                        return (
                            <tr>{d.rows.map((i: any, n: number) => {
                                return <td> {i.children && i.children.row ? i.children.row({ row: d.scope, index: v }) : d.scope[i.props.prop]}</td>
                            })}</tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
})