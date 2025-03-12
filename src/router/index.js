import { createRouter, createWebHistory } from 'vue-router';

import { profile } from '@/config';
import { Contact, Experience, Home, Projects, Thoughts, Tools } from '@/views';

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
		path: '/projects',
		name: 'Projects',
		component: Projects,
		meta: {
			title: 'Projects',
			showCollab: true
		}
	},
	{
		path: '/tools',
		name: 'Tools',
		component: Tools,
		meta: {
			title: 'Tools',
			showCollab: true
		}
	},
	{
		path: '/experience',
		children: [
			{
				path: '',
				name: 'Experience',
				component: Experience,
				meta: {
					title: 'Experience',
					showCollab: true
				}
			}
		]
	},
	{
		path: '/thoughts',
		name: 'Thoughts',
		component: Thoughts,
		meta: {
			title: 'Thoughts',
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
	},
	{ path: '/:pathMatch(.*)*', redirect: '/' } // Catch-all route to prevent 404s
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
