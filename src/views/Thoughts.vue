<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Card, TwitterCard } from '@/components';
import { socials, thoughts } from '@/config';
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
		<div>
			<div class="twitter-section column has-text-left">
				<div class="bullets column is-flex p-0 pb-3">
					<div class="column p-0">
						<span class="text-highlight is-clickable">#</span> My Thoughts
					</div>
				</div>
				<div class="column">
					<a
						target="_blank"
						rel="noopener noreferrer"
						:href="twitterURL"
					>
						<TwitterCard
							:tweets="socialData.twitter.tweets"
							:user="socialData.twitter.user"
							v-if="socialData"
						/>
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
					<div class="column is-6 pl-0" v-for="blog in socialData?.blogs" :key="blog.title">
						<a :href="blog.url" target="_blank" rel="noopener noreferrer">
							<Card
								:data="blog"
							/>
						</a>
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

	.blog-section {
		::v-deep(.card .banner) {
			height: 170px;
		}
		::v-deep(.card .banner img) {
			width: 100%;
			height: 170px;
			object-fit: cover;
		}
	}

	@media screen and (max-width: 768px) {
    .twitter-section, .column.is-flex, .blog-section {
			padding-left: 0;
			padding-right: 0;
		}

		.blog-section {
			.pl-0 {
				padding-right: 0;
			}
		}
  }
}
</style>