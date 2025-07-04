import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Arrow from './arrow.vue';

describe('Arrow.vue', () => {
	it('renders arrow icon', () => {
		const wrapper = mount(Arrow);
		expect(wrapper.exists()).toBe(true);
	});
});
