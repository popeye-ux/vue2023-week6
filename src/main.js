import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import as component
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
// sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// vee-validate
import {
    Field, Form, ErrorMessage, defineRule, configure,   
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';

// vee-validate 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import './assets/main.css'

// import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/all.scss";
import 'bootstrap'

// vee-validate 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

// 設定 vee-validate 全域規則
configure({
 generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
 validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// vee-validate 設定預設語系
setLocale('zh_TW');


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
// 將 Vue loading 註冊為全域元件
app.component('Loading', Loading)

// vue-validate 註冊元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
