import { ref } from "vue";
import { Notification, EmailSender, TelegramSender, type Sender } from "@/notifications";

export function useNotification() {
  const notificationType = ref<"email" | "whatsapp">("whatsapp");

  function sendNotification(sender: Sender): Promise<void> {
    let notification;

    if (notificationType.value === "email") {
      notification = new Notification(new EmailSender());
    } else {
      notification = new Notification(new TelegramSender());
    }

    return notification.send(sender);
  }

  return { notificationType, sendNotification };
}