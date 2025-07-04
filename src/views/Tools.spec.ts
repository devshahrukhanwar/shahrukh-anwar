import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Tools from './Tools.vue';

describe('Tools.vue', () => {
	it('renders Top-Tier Tech headline', () => {
		const wrapper = mount(Tools);
		expect(wrapper.text()).toMatch(/Top-Tier Tech/);
	});
});
