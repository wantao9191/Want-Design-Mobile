import { defineComponent } from 'vue'
export const TableItem = defineComponent({
    props: {
        label: String,
        prop: String,
        scope: Object,
        index: Number
    },
    setup(props, { slots }) {
        return () => (<td>{slots.row?.()}</td>)
    }
})