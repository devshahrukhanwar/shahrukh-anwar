import { describe, expect, it, vi } from 'vitest';

import { EventName } from '@/events';

import { useAnalytics } from '.';

describe('useAnalytics', () => {
	it('should call track on all services', () => {
		const mockTrack = vi.fn();
		const mockService = { track: mockTrack };

		const { track } = useAnalytics([mockService]);

		track(EventName.ContactForm, { foo: 'bar' });
		expect(mockTrack).toHaveBeenCalledWith(EventName.ContactForm, {
			foo: 'bar'
		});
	});
});
