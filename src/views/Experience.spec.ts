import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Experience from './Experience.vue';

describe('Experience.vue', () => {
	it('renders experience headline', () => {
		const wrapper = mount(Experience);
		expect(wrapper.text()).toContain('Over');
		expect(wrapper.text()).toContain('Years');
		expect(wrapper.text()).toContain('Developer Expertise');
	});
});
