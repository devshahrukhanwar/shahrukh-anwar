<script setup lang="ts">
import { reactive } from 'vue';

import { IconWrapper } from '@/components';
import { experience } from '@/config';
import { totalExperience } from '@/utils';

interface Company {
	name: string;
	details: string;
	tenure: string;
}

const companies = reactive(
	experience.companies.map((company: Company) => ({
		...company,
		isHovered: false
	}))
);
</script>

<template>
	<div class="columns is-block experience">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				Over {{ totalExperience }} Years of <br />
				Developer <span class="text-highlight">Expertise</span>
			</p>
		</div>
		<div
			class="column card has-text-left companies mx-3"
			:key="company.name"
			v-for="company in companies"
			@mouseenter="company.isHovered = true"
			@mouseleave="company.isHovered = false"
		>
			<a :href="company.url" target="_blank" rel="noopener noreferrer">
				<IconWrapper icon="arrow" :tilted="true" :hovered="company.isHovered" />
				<div class="column p-0">
					<div class="column py-0 name">{{ company.name }}</div>
					<div
						class="column pb-2 pt-1 is-three-quarters detail"
						v-html="company.details"
					></div>
					<div class="column pb-1 tenure">
						{{ company.tenure }}
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.experience {
	.companies {
		cursor: pointer;
		position: relative;

		.name {
			color: var(--text-color);
			font-size: 28px;
			font-weight: 550;
		}
		.detail {
			color: var(--text-color-grey);
			font-size: var(--text-small-font-size);
		}
		.tenure {
			color: var(--text-color-grey);
			font-size: var(--label-font-size);
		}

		&:hover {
			background-color: var(--bg-purple);

			.name,
			.detail,
			.tenure {
				color: var(--text-color);
			}
		}
	}

	@media screen and (max-width: 768px) {
		.companies {
			.detail {
				width: 90%;
			}
		}
	}
}
</style>
