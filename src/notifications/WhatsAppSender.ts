import type { NotificationSender, Sender } from './NotificationSender';

export class WhatsAppSender implements NotificationSender {
  async send(sender: Sender): Promise<void> {
    console.log(`📱 Sending WhatsApp message to ${sender}`);
  }
}