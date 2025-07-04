import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Sun from './sun.vue';

describe('Sun.vue', () => {
	it('renders sun icon', () => {
		const wrapper = mount(Sun);
		expect(wrapper.exists()).toBe(true);
	});
});
