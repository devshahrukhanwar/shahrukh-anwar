import axios from 'axios';

import {
	type Contact,
	Content,
	type NotificationSender
} from './NotificationSender';

const url: string = `${import.meta.env.VITE_TELEGRAM_BASE_URL}${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`;

export class TelegramSender implements NotificationSender {
	async send(_: Contact, content: Content): Promise<void> {
		return await axios.post(url, {
			parse_mode: 'HTML',
			chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
			text: content.text
		});
	}
}
