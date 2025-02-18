<script lang="ts" setup>
import { ref } from 'vue';

import faq from '@/config/faq.json';

const isExpanded = ref<boolean[]>([]);

const toggleSection = (index: number) => {
	isExpanded.value[index] = !isExpanded.value[index];
	isExpanded.value.filter((_, key) => {
		if (key !== index) {
			isExpanded.value[key] = false;
		}
	});
};
</script>

<template>
	<div class="faq container columns is-block p-0">
		<div class="column has-text-left has-text-centered-mobile p-0">
			<h2>
				Frequently <br />Asked <span class="text-highlight">Questions</span>
			</h2>
		</div>
		<div
			class="questions card column is-block px-5 mt-5"
			v-for="(item, index) in faq"
			:key="item.question"
		>
			<!-- FAQ Section Begins -->
			<div
				class="column is-flex is-clickable p-0"
				:class="{ 'is-open': isExpanded[index] }"
				@click="toggleSection(index)"
			>
				<div class="question column has-text-left pl-0 py-0">
					{{ item.question }}
				</div>
				<div class="column has-text-right p-0 is-narrow-mobile">
					<i
						:class="[
							{
								'is-active fa-chevron-up': isExpanded[index],
								'fa-chevron-down': !isExpanded[index]
							},
							'fa-solid'
						]"
					>
					</i>
				</div>
			</div>
			<transition name="fade" mode="out-in" appear>
				<div
					class="answer column has-text-left px-0 pb-0 pt-4"
					v-if="isExpanded[index]"
					v-html="item.answer"
				>
				</div>
			</transition>
		</div>
	</div>
	<!-- FAQ Section Ends -->
</template>

<style lang="scss" scoped>
.faq {
	.questions {
		color: var(--text-color);

		.question {
			font-weight: 600;
		}
		.answer {
			color: var(--text-color-grey);
		}
		i {
			font-size: 12px;

			&.is-active {
				color: var(--text-highlight);
			}
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: var(--h2-mobile-size);
		}
	}
}
</style>
