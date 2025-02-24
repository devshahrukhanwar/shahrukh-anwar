import { createRouter, createWebHistory } from 'vue-router';
import { profile } from '@/config';

import { Home, Contact } from '@/views';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '',
			showCollab: true
		}
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact,
		meta: {
			title: 'Contact',
			showCollab: false
		}
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes
});

router.beforeEach((to, _, next) => {
  if (to.meta && to.meta.title) {
    document.title = `${profile.name} | ${to.name}`;
  } else {
    document.title = profile.name;
  }

  window.scrollTo(0, 0);
  next();
});

export default router;
