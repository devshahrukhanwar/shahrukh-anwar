import * as analytics from '@vercel/analytics';
import { describe, expect, it, vi } from 'vitest';

import { useVercel } from '.';

vi.mock('@vercel/analytics', () => {
	return {
		track: vi.fn()
	};
});

describe('useVercel', () => {
	it('should call track with correct arguments', () => {
		const { track } = useVercel();

		track('test_event' as any, { foo: 'bar' });
		expect(analytics.track).toHaveBeenCalledWith('test_event', { foo: 'bar' });
	});
});
