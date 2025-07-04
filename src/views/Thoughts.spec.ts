import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import Thoughts from './Thoughts.vue';

vi.mock('@/stores', () => ({
	useThoughtsStore: () => ({
		fetchSocialData: vi.fn(),
		socialData: { twitter: { tweets: [] } }
	})
}));
vi.mock('@/config', () => ({
	socials: { twitter: { url: 'https://twitter.com' } },
	experience: { companies: [] }
}));

describe('Thoughts.vue', () => {
	it('renders My Thoughts headline', () => {
		const wrapper = mount(Thoughts);
		expect(wrapper.text()).toMatch(/My Thoughts/);
	});
});
