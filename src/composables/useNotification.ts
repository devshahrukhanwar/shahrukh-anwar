import { ref } from "vue";
import { Notification, EmailSender, WhatsAppSender, type Sender } from "@/notifications";

export function useNotification() {
  const notificationType = ref<"email" | "whatsapp">("email");

  function sendNotification(sender: Sender): Promise<void> {
    let notification;

    if (notificationType.value === "email") {
      notification = new Notification(new EmailSender());
    } else {
      notification = new Notification(new WhatsAppSender());
    }

    return notification.send(sender);
  }

  return { notificationType, sendNotification };
}