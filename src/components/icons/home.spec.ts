import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import HomeIcon from './home.vue';

describe('Home.vue', () => {
	it('renders home icon', () => {
		const wrapper = mount(HomeIcon);
		expect(wrapper.exists()).toBe(true);
	});
});
