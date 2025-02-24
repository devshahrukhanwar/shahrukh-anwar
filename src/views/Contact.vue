<script setup lang="ts">
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

interface Form {
  name: string
  email: string
  message: string
}

const schema = yup.object({
  name: yup.string().required('*Name is required'),
  email: yup.string().email('*Email must be valid').required('*Email is required'),
  message: yup.string().required('*Message is required')
});

const handleSubmit = (values: Form, { resetForm }) => {
  console.log('Form submitted:', values);
  resetForm()
};
</script>

<template>
  <div class="contact container columns is-block p-0">
		<div class="column has-text-left has-text-centered-mobile p-0">
			<h2>
				Let’s Create <br />Something <span class="text-highlight">Amazing</span>
			</h2>
		</div>
		<div
			class="contact-form card column is-block p-4 mt-5"
		>
			<Form :validation-schema="schema" @submit="handleSubmit">
				<div class="field">
					<label class="label has-text-left">Name</label>
					<div class="control has-text-left">
						<Field class="input" name="name" type="text" placeholder="Your Name" />
            <ErrorMessage name="name" class="errors" />
					</div>
				</div>
				<div class="field">
					<label class="label has-text-left">Email</label>
					<div class="control has-text-left">
						<Field class="input" name="email" type="email" placeholder="Your Email" />
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
						<button class="button is-fullwidth">Send</button>
					</div>
				</div>
			</Form>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  .contact-form {
    .label, input, textarea, .errors {
      color: var(--text-color-grey);
      font-size: var(--label-font-size);
      font-weight: normal;

      &.input, &.textarea {
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

  @media screen and (max-width: 768px) {
    h2 {
      font-size: var(--h2-mobile-size);
    }
  }
}
</style>