import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import '@/styles/_index.scss';

import App from './App.vue';

import router from './router';

const app = createApp(App);
const pinia = createPinia();

inject();
injectSpeedInsights();
app.use(pinia);
app.use(router).mount('#app');
