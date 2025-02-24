import axios from 'axios';
import { createApp, h, VNode } from 'vue';
import { EmailNotification } from '@/components';
import type { NotificationSender, Sender } from './NotificationSender';

const url: string = import.meta.env.VITE_BREVO_BASE_URL;

const headers: Record<string, string> = {
  'Api-Key': import.meta.env.VITE_BREVO_API_KEY
}

const to: Array<Sender> = [
  {
    name: import.meta.env.VITE_RECEIVER_NAME,
    email: import.meta.env.VITE_RECEIVER_EMAIL
  }
]

export class EmailSender implements NotificationSender {
  async sendMessage(sender: Sender): Promise<void> {
    return await axios.post(
      url,
      {
        to,
        sender,
        subject: `New Contact Form Submission from ${sender.name}`,
        htmlContent: this.getHTML(h(EmailNotification, { ...sender }))
      },
      { headers }
    );
  }

  getHTML(component: VNode): string {
    const app = createApp({
      render: () => component
    });

    // Create a temporary DOM element to mount the app
    const tempContainer = document.createElement('div');
    app.mount(tempContainer);

    // Get the raw HTML string
    const rawHtml = tempContainer.innerHTML;

    // Clean up the app instance
    app.unmount();

    return rawHtml;
  }
}
