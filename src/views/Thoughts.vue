<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Card, TwitterCard } from '@/components';
import { thoughts, socials } from '@/config';
import { useThoughtsStore } from '@/stores';
import { onMounted } from 'vue';

const thoughtsStore = useThoughtsStore();
const { socialData } = storeToRefs(thoughtsStore);

const twitterURL = socials.twitter.url;

onMounted(async () => {
	await thoughtsStore.fetchSocialData();
});
</script>

<template>
	<div class="thoughts columns container is-block">
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
				<div class="bullets column is-flex p-0 pb-3">
					<div class="column p-0">
						<span class="text-highlight is-clickable">#</span> My Thoughts
					</div>
				</div>
				<div class="column is-flex">
					<a
						target="_blank"
						rel="noopener noreferrer"
						:href="twitterURL"
					>
						<TwitterCard
							:tweets="socialData.twitter.tweets"
							:user="socialData.twitter.user"
							v-if="socialData" />
					</a>
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
    .twitter-section, .column.is-flex, .blog-section {
			padding-right: 0;
		}
  }
}
</style>