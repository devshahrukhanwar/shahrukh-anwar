import axios from 'axios';

export function useSocial() {
	async function getSocialData(): Promise<void> {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_API_URL}/social/posts`
			);

			console.log('Social data fetched successfully:', response.data);
			return response.data;
		} catch (error) {
			console.error('Error fetching social data:', error);
		}
	}

	return {
		getSocialData
	};
}
