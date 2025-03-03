<script lang="ts" setup>
import { ref } from 'vue';

import { experience, profile } from '@/config';

const experienceYears = ref<number>(0);
const year: number = new Date().getFullYear();
experienceYears.value = year - experience.joining;
</script>

<template>
	<div class="columns introduction">
		<div class="column has-text-left">
			<p class="heading">
				Transforming Your <br />
				Ideas into <span class="text-highlight">Reality</span>
			</p>
			<p class="description mt-2">
				Passionate about creating intuitive and engaging user experiences.
				<br />
				Specialize in transforming ideas into beautifully crafted products.
			</p>
			<div class="column is-inline-flex has-text-left p-0 mt-5 experience">
				<div class="column is-uppercase p-0">
					<p class="text-bold">+{{ experienceYears }}</p>
					<span>Years of experience</span>
				</div>
				<div class="column is-uppercase p-0">
					<p class="text-bold">+46</p>
					<span>Projects Completed</span>
				</div>
				<div class="column is-uppercase p-0">
					<p class="text-bold">+20</p>
					<span
						>Worldwide <br />
						Clients</span
					>
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
}
</style>
