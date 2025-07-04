import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Introduction from './introduction.vue';

describe('Introduction.vue', () => {
	it('renders introduction component', () => {
		const wrapper = mount(Introduction);
		expect(wrapper.exists()).toBe(true);
	});
});
