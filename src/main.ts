import { createApp } from 'vue'
import { App } from './App'
import router from './router'
import WantUi from '@wantao/want-ui'
import './style.scss'
const app = createApp(App)
app.use(router).use(WantUi)
app.mount('#app')
