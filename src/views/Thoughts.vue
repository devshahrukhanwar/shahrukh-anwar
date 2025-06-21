<script setup lang="ts">
import { type TwitterSchema } from '@/stores/thoughts/schema'
import { Card, Carousel, TwitterCard } from '@/components';
import { thoughts, socials } from '@/config';
import { useSocial } from '@/composables';
import { ref, onMounted } from 'vue';

const { getSocialData } = useSocial();
const socialData = ref<TwitterSchema | null>(null);

const twitterURL = socials.twitter.url;

onMounted(async () => {
	socialData.value = await getSocialData();
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
			<div class="blog-section column has-text-left mt-5">
				<div class="bullets column is-flex p-0 pb-3">
					<div class="column p-0">
						<span class="text-highlight is-clickable">#</span> My Blogs
					</div>
				</div>
				<div class="column is-flex-desktop is-flex-wrap-wrap p-0">
					<div class="column is-6 pl-0" v-for="thought in thoughts" :key="thought.title">
						<Card :data="thought" :isLink="false" />
					</div>
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