import { getHTML, telegram } from '@/utils'
import { ThankYou, EmailNotification } from '@/components'
import { type Content } from "@/notifications/NotificationSender"
import { Notification, EmailSender, TelegramSender, type Contact } from "@/notifications"

export function useNotification() {
  async function sendNotification(contact: Contact): Promise<void> {
    const { TGContent, ThanksContent, ContactContent } = getContent(contact)

    const notifyEmail = new Notification(new EmailSender())
    const notifyTG = new Notification(new TelegramSender())
    const notifyThanks = new Notification((new EmailSender()).setTo([contact]))

    Promise.race([
      notifyThanks.send(contact, ThanksContent),
      notifyEmail.send(contact, ContactContent),
      notifyTG.send(contact, TGContent)
    ])
  }

  function getContent(contact: Contact) {
    const TGContent: Content = {
      text: <string>telegram.contact(contact).trim()
    }

    const ThanksContent: Content = {
      subject: <string>(`Thank you for contacting me, ${contact.name}`),
      text: <string>getHTML(ThankYou, contact).trim()
    }

    const ContactContent: Content = {
      subject: <string>(`Portfolio | Contact Form Submission from ${contact.name}`),
      text: <string>getHTML(EmailNotification, contact).trim()
    }

    return { TGContent, ThanksContent, ContactContent }
  }

  return { sendNotification }
}