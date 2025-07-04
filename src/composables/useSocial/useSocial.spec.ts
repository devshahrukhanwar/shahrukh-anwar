import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';

import { social } from '@/mocks';

import { useSocial } from '.';

vi.mock('axios');

describe('useSocial', () => {
	it('should fetch and parse social data', async () => {
		(axios.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { data: social }
		});

		const { getSocialData } = useSocial();
		const result = await getSocialData();

		expect(result).toBeDefined();
		expect(axios.get).toHaveBeenCalled();
	});

	it('should handle errors gracefully', async () => {
		axios.get.mockRejectedValueOnce(new Error('fail'));
		const { getSocialData } = useSocial();

		await expect(getSocialData()).resolves.toBeUndefined();
	});
});
