import axios from 'axios';

import {
	type Contact,
	type Content,
	type NotificationSender,
	headers
} from './NotificationSender';

const url: string = `${import.meta.env.VITE_BREVO_BASE_URL}/smtp/email`;

const from: Contact = {
	name: import.meta.env.VITE_SENDER_NAME,
	email: import.meta.env.VITE_SENDER_EMAIL
};

export class EmailSender implements NotificationSender {
	private to: Array<Contact> = [
		{
			name: import.meta.env.VITE_RECEIVER_NAME,
			email: import.meta.env.VITE_RECEIVER_EMAIL
		}
	];

	setTo(recipients: Array<Contact>): this {
		this.to = recipients;
		return this;
	}

	async send(_: Contact, content: Content): Promise<void> {
		return await axios.post(
			url,
			{
				to: this.to,
				sender: from,
				subject: content.subject,
				htmlContent: content.text
			},
			{ headers }
		);
	}
}
