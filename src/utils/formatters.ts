import { createApp, h, ref } from 'vue';

import { experience } from '@/config';

const year: number = new Date().getFullYear();
export const totalExperience = ref<number>(year - experience.joining);

/** Get raw HTML string from a Vue component */
export const getHTML = (component: any, props: any = {}): string => {
	const app = createApp({
		render: () => h(component, { ...props })
	});

	// Create a temporary DOM element to mount the app
	const tempContainer = document.createElement('div');
	app.mount(tempContainer);

	// Get the raw HTML string
	const rawHtml = tempContainer.innerHTML;

	// Clean up the app instance
	app.unmount();

	return rawHtml;
};

export const getDate = (date: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return new Date(date).toLocaleDateString('en-US', options);
};
