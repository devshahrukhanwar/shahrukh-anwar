<script setup lang="ts">
import { Card, TwitterCard } from '@/components';
import { thoughts } from '@/config';
import { useSocial } from '@/composables';

const { getSocialData } = useSocial();

import { ref, onMounted } from 'vue';

// const socialData = ref(null);

// onMounted(async () => {
// 	socialData.value = await getSocialData();
// });
// console.log('==========> socialData', socialData);
</script>

<template>
	<div class="columns is-block thoughts">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				My Thoughts<span class="is-hidden-desktop"></span>
        <br />
        <span> and </span>
        <span class="text-highlight">Perspectives</span>
			</p>
		</div>
		<div class="column p-0">
			<div class="twitter-section column has-text-left">
				<div class="bullets column px-0">
					<span class="text-highlight is-clickable">#</span> Twitter Feed
				</div>
				<div class="column is-flex">
					<TwitterCard />
				</div>
			</div>
			<div class="blog-section column is-flex-desktop is-flex-wrap-wrap">
				<div class="column is-6 pl-0" v-for="thought in thoughts" :key="thought.title">
					<Card :data="thought" :isLink="false" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.thoughts {
	.bullets {
		font-size: 20px;
	}

	@media screen and (max-width: 768px) {
    .twitter-section {
			padding-right: 0;

			.column.is-flex {
				padding-right: 0;
			}
		}
  }
}
</style>