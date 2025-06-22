import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useSocial } from '@/composables/useSocial';
import type { SocialSchema } from '@/stores/thoughts/schema';

export const useThoughtsStore = defineStore('thoughts', () => {
	const socialData = ref<SocialSchema | null>(null);
	const loading = ref(false);
	const error = ref<string | null>(null);

	async function fetchSocialData() {
		loading.value = true;
		error.value = null;

		try {
			const { getSocialData } = useSocial();
			const data = await getSocialData();
			socialData.value = data;
			return data;
		} catch (e: any) {
			error.value = e?.message || 'Failed to load social data';
			throw e;
		} finally {
			loading.value = false;
		}
	}

	return {
		socialData,
		loading,
		error,
		fetchSocialData
	};
});
