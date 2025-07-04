import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Collaborate from './collaborate.vue';

describe('Collaborate.vue', () => {
	it('renders collaborate component', () => {
		const wrapper = mount(Collaborate);
		expect(wrapper.exists()).toBe(true);
	});
});
