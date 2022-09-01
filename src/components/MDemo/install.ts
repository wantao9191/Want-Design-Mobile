import { MDemo } from ".";
import { Demoblock } from "./demoBlock";

export function installDemo(Vue: any) {
    Vue.component('m-demo', MDemo)
    Vue.component('demo-block', Demoblock)
}
