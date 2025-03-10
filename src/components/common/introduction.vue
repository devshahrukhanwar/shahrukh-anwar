<script lang="ts" setup>
import { ref } from 'vue';

import { experience } from '@/config';

const experienceYears = ref<number>(0);
const year: number = new Date().getFullYear();
experienceYears.value = year - experience.joining;
</script>

<template>
	<div class="columns introduction">
		<div class="column has-text-left has-text-centered-mobile">
			<p class="heading">
				<span class="is-hidden-mobile">
					Transforming Your <br />
					Ideas into <span class="text-highlight">Reality</span>
				</span>
				<span class="is-hidden-desktop">
					Transforming <br /> Your Ideas <br /> into <span class="text-highlight">Reality</span>
				</span>
			</p>
			<p class="description mt-2">
				<span class="is-hidden-mobile">
					Passionate about creating intuitive and engaging software experiences.
					<br />
					Specialized in transforming ideas into beautifully crafted products.
				</span>
				<span class="is-hidden-desktop">
					Passionate about creating intuitive and engaging
					<br />
					software experiences. Specialized in transforming ideas into
					<br />
					beautifully crafted products.
				</span>
			</p>
			<div class="column is-inline-flex has-text-left p-0 mt-5 has-text-centered-mobile experience">
				<div class="column is-uppercase p-0">
					<p class="text-bold">+{{ experienceYears }}</p>
					<span>Years of experience</span>
				</div>
				<div class="column is-uppercase p-0">
					<p class="text-bold">+{{ experience.projects }}</p>
					<span>Projects Completed</span>
				</div>
				<div class="column is-uppercase p-0">
					<p class="text-bold">+{{ experience.client }}</p>
					<span>Worldwide <br />
						Clients</span
					>
				</div>
			</div>
			<div class="column is-flex px-0 mt-5 has-text-cenetered-mobile">
				<div class="column is-narrow pl-0">
					<router-link :to="{ name: 'Contact' }">
						<button class="button">
							Let's Talk
						</button>
					</router-link>
				</div>
				<div class="column is-narrow is-5-mobile is-align-self-center has-text-centered-mobile work" v-if="0">
					<router-link :to="{ name: 'Projects' }">
						My Work
						<span class="ml-2">
							<i class="fa-solid fa-arrow-right-long"></i>
						</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.introduction {
	.heading {
		font-size: 68px;
    font-weight: 550;
		line-height: 1.1em;
	}
	.description {
		color: var(--text-color-grey);
	}
	.experience {
		div {
			&.column {
				line-height: 1.2;
			}
			.text-bold {
				color: unset;
				font-size: 70px;
				font-weight: 550;
			}
			span {
				color: var(--text-color-grey);
				font-size: 16px;
			}
		}
	}
	.work, a {
		color: var(--text-color);
		cursor: pointer;
		font-size: var(--text-small-font-size);

		i {
			transform: scaleX(1.3);
		}
		&:hover {
			i {
				color: var(--text-highlight);
				transform: scaleX(1.3) translateX(2px);
				transition: transform 0.5s ease;
			}
		}
	}
	.button {
		padding: 8px 50px;
		font-size: var(--text-small-font-size);
		background-color: var(--button-color);
	}

	@media screen and (max-width: 768px) {
		.heading, {
			font-size: 48px;
		}
		.experience div .text-bold {
			font-size: 50px;
		}
	}
}
</style>
