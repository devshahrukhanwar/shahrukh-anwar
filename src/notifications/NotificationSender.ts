import * as yup from 'yup';

export const headers: Record<string, string> = {
  'Api-Key': import.meta.env.VITE_BREVO_API_KEY
}

export interface Sender {
  name: yup.StringSchema;
  email: yup.StringSchema;
  message?: yup.StringSchema;
}

export interface NotificationSender {
  send(sender: Sender): Promise<void>;
}
