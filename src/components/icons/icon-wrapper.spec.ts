import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import IconWrapper from './icon-wrapper.vue';

describe('IconWrapper.vue', () => {
	it('renders icon-wrapper', () => {
		const wrapper = mount(IconWrapper);
		expect(wrapper.exists()).toBe(true);
	});
});
