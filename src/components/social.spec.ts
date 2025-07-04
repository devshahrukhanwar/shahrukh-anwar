import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Social from './social.vue';

describe('Social.vue', () => {
	it('renders social component', () => {
		const wrapper = mount(Social);
		expect(wrapper.exists()).toBe(true);
	});
});
