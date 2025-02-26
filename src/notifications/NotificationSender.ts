import * as yup from 'yup';

export const headers: Record<string, string> = {
	'Api-Key': import.meta.env.VITE_BREVO_API_KEY
};

export interface Contact {
	name: yup.StringSchema;
	email: yup.StringSchema;
	message?: yup.StringSchema;
}

export interface Content {
	subject?: string;
	text?: string;
}

export interface NotificationSender {
	send(contact: Contact, content: Content): Promise<void>;
}
