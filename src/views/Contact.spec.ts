import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import Contact from './Contact.vue';

vi.mock('@/composables', () => ({
	useAnalytics: () => ({ track: vi.fn() }),
	useNotification: () => ({
		sendNotification: vi.fn().mockResolvedValue(undefined)
	})
}));

describe('Contact.vue', () => {
	it('renders and submits the form', async () => {
		const wrapper = mount(Contact);
		expect(wrapper.text()).toContain('Send');

		// Fill out the form fields
		await wrapper.find('input[name="name"]').setValue('Test User');
		await wrapper.find('input[name="email"]').setValue('test@example.com');
		await wrapper.find('textarea[name="message"]').setValue('Hello!');

		// Submit the form
		await wrapper.find('form').trigger('submit.prevent');

		// Wait for the async UI update (setTimeout in component)
		await new Promise((r) => setTimeout(r, 600));
		await wrapper.vm.$nextTick();
		expect(wrapper.text()).toContain('Thank You');
	});
});
