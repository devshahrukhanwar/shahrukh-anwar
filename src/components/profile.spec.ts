import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Profile from './profile.vue';

describe('Profile.vue', () => {
	it('renders profile component', () => {
		const wrapper = mount(Profile);
		expect(wrapper.exists()).toBe(true);
	});
});
