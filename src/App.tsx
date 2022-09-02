import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { MHeader } from './components/MHeader'
export const App = defineComponent({
    components: { MHeader },
    props: {},
    setup(props, context) {
        return () => (
            <>
                <m-header></m-header>
                <RouterView />
            </>
        )
    }
})