import './style.scss'
import { createApp } from 'vue'
import { App } from './App'
import router from './router'
import WantUi from '@wantao/want-ui'
import { installDemo } from './components/MDemo/install';
import "prismjs/themes/prism.min.css";
import "prismjs";
const app = createApp(App)
const Prism = (window as any).Prism;
app.use(router).use(WantUi).use(installDemo)
app.mount('#app')
