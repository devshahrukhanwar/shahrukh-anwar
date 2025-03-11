import { experience } from '@/config';
import { createApp, ref, h } from 'vue';

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
