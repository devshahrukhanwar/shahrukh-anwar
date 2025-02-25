import axios from 'axios';
import { getHTML } from '@/utils';
import { EmailNotification } from '@/components';
import { type NotificationSender, type Sender, headers } from './NotificationSender';

const url: string = `${import.meta.env.VITE_BREVO_BASE_URL}/smtp/email`;

const to: Array<Sender> = [
  {
    name: import.meta.env.VITE_RECEIVER_NAME,
    email: import.meta.env.VITE_RECEIVER_EMAIL
  }
]

const from: Sender = {
  name: import.meta.env.VITE_SENDER_NAME,
  email: import.meta.env.VITE_SENDER_EMAIL
}

export class EmailSender implements NotificationSender {
  async send(sender: Sender): Promise<void> {
    return await axios.post(
      url,
      {
        to,
        sender: from,
        subject: `Portfolio | Contact Form Submission from ${sender.name}`,
        htmlContent: getHTML(EmailNotification, sender)
      },
      { headers }
    );
  }
}
