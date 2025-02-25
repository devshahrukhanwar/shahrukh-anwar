import * as yup from 'yup';

export interface Sender {
  name: yup.StringSchema;
  email: yup.StringSchema;
  message?: yup.StringSchema;
}

export interface NotificationSender {
  send(sender: Sender): Promise<void>;
}
