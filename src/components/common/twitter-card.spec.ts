import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TwitterCard from './twitter-card.vue';

describe('TwitterCard.vue', () => {
	it('renders twitter-card component', () => {
		const wrapper = mount(TwitterCard, {
			props: {
				user: {
					id: '1',
					name: 'John Doe',
					username: 'johndoe',
					profile_image_url: 'https://example.com/profile.jpg'
				},
				tweets: [
					{
						id: '1',
						author_id: '1',
						created_at: '2023-01-01T00:00:00Z',
						text: 'Hello, world!'
					}
				]
			}
		});
		expect(wrapper.exists()).toBe(true);
	});
});
