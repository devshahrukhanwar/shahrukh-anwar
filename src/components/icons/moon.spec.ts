import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Moon from './moon.vue';

describe('Moon.vue', () => {
	it('renders moon icon', () => {
		const wrapper = mount(Moon);
		expect(wrapper.exists()).toBe(true);
	});
});
