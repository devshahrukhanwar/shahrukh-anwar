import { Contact } from '@/notifications';

export const telegram = {
	contact: (contact: Contact) =>
		`<b>Contact Form Submission From</b>` +
		`\n${contact.name}` +
		`\n\n<b>Email:</b>` +
		`\n${contact.email}` +
		`\n\n<b>Message:</b>` +
		`\n\n<i>"${contact.message}"</i>` +
		`\n\n<b>Tip:</b> Please check your email and communicate for further details. Thank you ❤️.`
};
