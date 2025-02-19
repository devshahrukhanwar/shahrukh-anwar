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
			<form>
				<div class="field">
					<label class="label has-text-left">Name</label>
					<div class="control">
						<input class="input" type="text" placeholder="Your Name" v-model="name" required>
					</div>
				</div>
				<div class="field">
					<label class="label has-text-left">Email</label>
					<div class="control">
						<input class="input" type="email" placeholder="Your Email" v-model="email" required>
					</div>
				</div>
				<div class="field">
					<label class="label has-text-left">Message</label>
					<div class="control">
						<textarea
              class="textarea py-4"
              placeholder="Your Message"
              rows="6"
              v-model="message"
              required
            >
            </textarea>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<button class="button is-fullwidth">Send</button>
					</div>
				</div>
			</form>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  .contact-form {
    .label, input, textarea {
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