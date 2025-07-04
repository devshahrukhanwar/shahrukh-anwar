import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Tooltip from './tooltip.vue';

describe('Tooltip.vue', () => {
	it('renders tooltip component', () => {
		const wrapper = mount(Tooltip);
		expect(wrapper.exists()).toBe(true);
	});
});
