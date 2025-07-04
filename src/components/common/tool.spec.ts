import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Tool from './tool.vue';

describe('Tool.vue', () => {
	it('renders tool component with props', () => {
		const tool = {
			name: 'Laravel',
			detail: 'Backend Framework (PHP)',
			icon: 'fab fa-laravel',
			color: '#f53003'
		};
		const wrapper = mount(Tool, {
			props: { tool }
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.text()).toContain('Laravel');
		expect(wrapper.text()).toContain('Backend Framework (PHP)');
	});
});
