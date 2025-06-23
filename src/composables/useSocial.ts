import axios from 'axios';

import { type SocialSchema, socialSchema } from '@/stores/thoughts/schema';

export function useSocial() {
	async function getSocialData(): Promise<SocialSchema> {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_API_URL}/social/posts`
			);

			const { data } = response.data;

			return socialSchema.parse(data);
		} catch (error) {
			console.error('Error fetching social data:', error);
		}
	}

	return {
		getSocialData
	};
}
