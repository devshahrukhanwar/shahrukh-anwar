import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { social } from '@/mocks';

import Card from './card.vue';

describe('Card.vue', () => {
	it('renders card component', () => {
		const wrapper = mount(Card, {
			props: { data: social.blogs[0] }
		});
		expect(wrapper.exists()).toBe(true);
	});
});
