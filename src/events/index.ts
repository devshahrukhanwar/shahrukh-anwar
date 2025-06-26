export enum EventName {
	ContactForm = 'Contact form submission'
}

export type AnalyticsProperties = Record<
	string,
	string | number | boolean | null
>;

export interface AnalyticsEvent<
	Event = EventName,
	Properties = AnalyticsProperties
> {
	name: Event;
	properties?: Properties;
}
