import axios from 'axios'
import { type NotificationSender, type Sender, headers } from './NotificationSender'

const url: string = `${import.meta.env.VITE_TELEGRAM_BASE_URL}${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`

export class TelegramSender implements NotificationSender {
  async send(sender: Sender): Promise<void> {
    const text = `<b>Contact Form Submission - ${sender.name}</b>`
      + `\n\n<b>Email:</b> ${sender.email}`
      + `\n\n<b>Message:</b>`
      + `\n\n<i>"${sender.message}"</i>`
      + `\n\n<b>Tip:</b> Please check your email and communicate for further details. Thank you ❤️.`

    return await axios.post(
      url,
      {
        parse_mode: "HTML",
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        text: text.trim()
      },
      { headers }
    );
  }
}