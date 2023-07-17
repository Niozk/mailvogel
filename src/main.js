import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import './assets/main.css'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import language from './assets/language.json'

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'nl',
    messages: language
})
  
app.use(createPinia())
app.use(router)
app.use(VueSplide)
app.use(i18n)

app.mount('#app')