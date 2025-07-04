import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useSocial } from '@/composables/useSocial';
import { social } from '@/mocks';

import { useThoughtsStore } from './thoughtsStore';

vi.mock('@/composables/useSocial');

describe('useThoughtsStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
		vi.clearAllMocks();
	});

	it('fetches and sets social data', async () => {
		(useSocial as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
			getSocialData: vi.fn().mockResolvedValue(social)
		});
		const store = useThoughtsStore();
		const data = await store.fetchSocialData();

		expect(data).toEqual(social);
		expect(store.socialData).not.toBeNull();
		expect(store.socialData).toEqual(social);
		expect(store.loading).toBe(false);
		expect(store.error).toBeNull();
	});

	it('handles errors and sets error state', async () => {
		(useSocial as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
			getSocialData: vi.fn().mockRejectedValue(new Error('fail'))
		});

		const store = useThoughtsStore();
		await expect(store.fetchSocialData()).rejects.toThrow('fail');

		expect(store.error).toBe('fail');
		expect(store.loading).toBe(false);
	});
});
