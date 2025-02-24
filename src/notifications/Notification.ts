import type { NotificationSender, Sender } from './NotificationSender';

export class Notification {
  private sender: NotificationSender;

  constructor(sender: NotificationSender) {
    this.sender = sender;
  }

  send(sender: Sender): void {
    this.sender.sendMessage(sender);
  }
}
