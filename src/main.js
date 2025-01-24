import { createApp } from 'vue'

import '@/styles/_index.scss'

import App from './App.vue'
import router from './router';

const app = createApp(App)
app.use(router).mount('#app')
