import { BeforeSendEvent, track } from '@vercel/analytics';

import { AnalyticsEvent } from '@/events';

import type { AnalyticsService } from '../useAnalytics';

interface UseVercelComposable extends AnalyticsService<BeforeSendEvent> {}

export type AllowedPropertyValues = string | number | boolean | null;

export function useVercel(): UseVercelComposable {
	return {
		track: (
			event: AnalyticsEvent['name'],
			properties?: AnalyticsEvent['properties']
		): void => {
			track(event, properties);
		}
	};
}
