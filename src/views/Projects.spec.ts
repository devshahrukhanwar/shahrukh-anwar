import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Projects from './Projects.vue';

describe('Projects.vue', () => {
	it('renders Recent Projects headline', () => {
		const wrapper = mount(Projects);
		expect(wrapper.text()).toMatch(/Recent Projects/);
	});
});
