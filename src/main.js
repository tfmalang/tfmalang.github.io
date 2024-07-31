import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

createApp(App)
.use(router)
.use(VueScrollTo)
.mount('#app')
