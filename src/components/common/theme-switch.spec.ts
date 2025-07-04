import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ThemeSwitch from './theme-switch.vue';

describe('ThemeSwitch.vue', () => {
	it('renders theme-switch component', () => {
		const wrapper = mount(ThemeSwitch);
		expect(wrapper.exists()).toBe(true);
	});
});
