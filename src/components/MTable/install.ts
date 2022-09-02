import { MTable } from "."
import { TableItem } from "./tableItem"

export function installTable(Vue: any) {
    Vue.component('m-table', MTable)
    Vue.component('table-item', TableItem)
}
