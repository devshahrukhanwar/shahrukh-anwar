import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Faq from './faq.vue';

describe('Faq.vue', () => {
	it('renders faq component', () => {
		const wrapper = mount(Faq);
		expect(wrapper.exists()).toBe(true);
	});
});
