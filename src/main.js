import { createApp } from 'vue'
import router from './router'; // 导入路由配置文件
import './style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue'
import i18n from "./locales/i18n.ts";

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(i18n)
    .mount('#app')
