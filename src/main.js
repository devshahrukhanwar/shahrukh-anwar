import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/styles/_index.scss';

import App from './App.vue';

import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router).mount('#app');
