<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';
import { onMounted, ref } from 'vue';
import * as yup from 'yup';

import { type Contact, useAnalytics, useNotification } from '@/composables';
import { EventName } from '@/events';

const { track } = useAnalytics();
const { sendNotification } = useNotification();

const btnText = ref('Send');
const isSubmitting = ref(false);

const schema = yup.object({
	name: yup.string().required('*Name is required'),
	email: yup
		.string()
		.email('*Email must be valid')
		.required('*Email is required'),
	message: yup.string().required('*Message is required')
});

const handleSubmit = (
	contact: Contact,
	{ resetForm: resetForm }: { resetForm: () => void }
) => {
	isSubmitting.value = true;
	track(EventName.ContactForm, {
		name: contact.name,
		email: contact.email,
		message: contact.message ?? ''
	});

	setTimeout(() => {
		sendNotification(contact)
			.then(() => {
				resetForm();
				isSubmitting.value = false;
				btnText.value = 'Thank You';
			})
			.catch((error: Error) => {
				throw new Error(`Error sending email: ${error}`);
			})
			.finally(() => {
				isSubmitting.value = false;
				setTimeout(() => {
					btnText.value = 'Send';
				}, 1000);
			});
	}, 500);
};
</script>

<template>
	<div class="contact container columns is-block p-0">
		<div class="headline column has-text-left has-text-centered-mobile p-0">
			<p class="heading">
				Let’s Create <br />Something <span class="text-highlight">Amazing</span>
			</p>
		</div>
		<div class="contact-form card column is-block p-4 mt-5">
			<Form :validation-schema="schema" @submit="handleSubmit">
				<div class="field">
					<label class="label has-text-left">Name</label>
					<div class="control has-text-left">
						<Field
							class="input"
							name="name"
							type="text"
							placeholder="Your Name"
						/>
						<ErrorMessage name="name" class="errors" />
					</div>
				</div>
				<div class="field">
					<label class="label has-text-left">Email</label>
					<div class="control has-text-left">
						<Field
							class="input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<ErrorMessage name="email" class="errors" />
					</div>
				</div>
				<div class="field">
					<label class="label has-text-left">Message</label>
					<div class="control has-text-left">
						<Field
							class="textarea"
							as="textarea"
							name="message"
							placeholder="Your Message"
							rows="6"
						/>
						<ErrorMessage name="message" class="errors" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button
							class="button is-fullwidth"
							:class="{ 'is-loading': isSubmitting }"
						>
							{{ btnText }}
						</button>
					</div>
				</div>
			</Form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact {
	.contact-form {
		.label,
		input,
		textarea,
		.errors {
			color: var(--text-color-grey);
			font-size: var(--label-font-size);
			font-weight: normal;

			&.input,
			&.textarea {
				overflow: hidden;
				box-shadow: none;
				border-radius: 10px;
				background-color: var(--light-grey-shade);
			}

			&.textarea {
				min-height: 160px;
			}

			&:focus {
				border-color: var(--text-highlight);
			}
		}
		.button {
			padding: 8px 50px;
			margin-top: 30px;
			border-radius: 10px;
			background-color: var(--button-color);
		}
	}
}
</style>
