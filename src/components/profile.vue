<script lang="ts" setup>
import { ref } from 'vue';

import { profile } from '@/config';

import Social from './social.vue';

defineProps({
	msg: String
});

const count = ref(0);
</script>

<template>
	<div class="card profile container is-fluid p-6">
		<div class="info mb-2">
			<div class="photo">
				<img src="/photos/profile.png" :alt="profile.name" />
			</div>
			<div class="details mt-3">
				<section class="name">{{ profile.name }}</section>
				<section class="designation">{{ profile.designation }}</section>
				<section class="address">
					<a :href="profile.url" target="_blank" rel="noopener noreferrer">{{
						profile.address
					}}</a>
				</section>
			</div>
		</div>
		<Social />
		<router-link :to="{ name: 'Contact' }">
			<button class="button">Let's Talk</button>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
.profile {
	border-radius: 16px;
	background-color: var(--card-bg-color);

	.info {
		.photo {
			img {
				border-radius: 16px;
			}
		}
		.details {
			color: var(--text-color);
			letter-spacing: -0.01em;

			.name {
				color: var(--text-color);
				font-size: 32px;
				font-weight: 700;
			}

			.designation,
			.address,
			a {
				color: var(--text-color-grey);
				font-size: 18px;
				font-weight: 400;
				letter-spacing: 0em;
			}
		}
	}
	.button {
		padding: 8px 50px;
		margin-top: 70px;
		background-color: var(--button-color);
	}

	@media screen and (max-width: 768px) {
		&.card {
			padding: 1.5rem !important;
		}
	}
}
</style>
