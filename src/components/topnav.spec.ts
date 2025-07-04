import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import Topnav from './topnav.vue';

vi.mock('@/config', () => ({
	experience: {},
	nav: {
		home: {
			title: 'Home',
			icon: 'fa-sharp fa-solid fa-house fa-thin-mimic',
			path: '/'
		}
	}
}));

describe('Topnav.vue', () => {
	it('renders topnav component', () => {
		const wrapper = mount(Topnav, {
			global: {
				mocks: {
					$route: { path: '/' }
				}
			}
		});
		expect(wrapper.exists()).toBe(true);
	});
});
