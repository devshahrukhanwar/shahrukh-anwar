import axios from 'axios';
import { describe, expect, it, vi } from 'vitest';

import { useNotification } from '.';

vi.mock('axios');

describe('useNotification', () => {
	it('should send notification with correct data', async () => {
		axios.post.mockResolvedValueOnce({});
		const { sendNotification } = useNotification();

		const contact = {
			name: 'Test',
			email: 'test@example.com',
			message: 'Hello'
		};
		await sendNotification(contact);
		expect(axios.post).toHaveBeenCalled();
	});

	it('should handle errors gracefully', async () => {
		axios.post.mockRejectedValueOnce(new Error('fail'));
		const { sendNotification } = useNotification();

		const contact = {
			name: 'Test',
			email: 'test@example.com',
			message: 'Hello'
		};
		await sendNotification(contact); // Should not throw
		expect(axios.post).toHaveBeenCalled();
	});
});
