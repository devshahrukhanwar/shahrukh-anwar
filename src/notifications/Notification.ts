import type {
	Contact,
	Content,
	NotificationSender
} from './NotificationSender';

export class Notification {
	private notification: NotificationSender;

	constructor(notification: NotificationSender) {
		this.notification = notification;
	}

	send(contact: Contact, content: Content): Promise<void> {
		return this.notification.send(contact, content);
	}
}
