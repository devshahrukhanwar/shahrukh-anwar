<script lang="ts" setup>
import { ref } from 'vue';

import { Tooltip } from '@/components';
import { socials } from '@/config';

const isHovering = ref({});
</script>

<template>
	<div class="social py-3">
		<div class="inline-flex is-size-5">
			<a
				class="is-inline-flex"
				target="_blank"
				rel="noopener noreferrer"
				:href="social.url"
				v-for="social in socials"
				:key="social.icon"
				@mouseenter="isHovering[social.title] = true"
				@mouseleave="isHovering[social.title] = false"
			>
				<span class="icon is-clickable">
					<img :src="`icons/${social.icon}.svg`" :alt="social.title" />
					<Tooltip class="is-hidden-mobile" :content="social.title" v-if="isHovering[social.title]" />
				</span>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.social {
	position: relative;

	.icon {
		margin: 0 2px;
	}
	.tooltip {
		top: 40px;
		color: var(--text-color);
		position: absolute;
	}
}
</style>
