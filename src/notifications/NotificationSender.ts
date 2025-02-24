import * as yup from 'yup';

export interface Sender {
  name: yup.StringSchema;
  email: yup.StringSchema;
  message?: yup.StringSchema;
}

export interface NotificationSender {
  sendMessage(sender: Sender): Promise<void>;
}
