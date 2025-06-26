import { useVercel } from '@/composables';
import { AnalyticsEvent } from '@/events';

interface UseAnalyticsComposable {
	track(
		event: AnalyticsEvent['name'],
		properties?: AnalyticsEvent['properties']
	): void;
}

export interface AnalyticsService<Event> {
	track(
		event: AnalyticsEvent['name'],
		properties?: AnalyticsEvent['properties']
	): void;
}

const defaultServices: AnalyticsService<unknown>[] = [useVercel()];

export function useAnalytics(
	services: AnalyticsService<unknown>[] = defaultServices
): UseAnalyticsComposable {
	const track = (
		event: AnalyticsEvent['name'],
		properties?: AnalyticsEvent['properties']
	): void => {
		services.forEach((service) => {
			service.track(event, properties);
		});
	};

	return { track };
}
