<script setup lang="ts">
import { ref } from 'vue';
import { IconWrapper } from '@/components';

const isHovered = ref(false);
</script>

<template>
	<router-link :to="{ name: 'Contact' }">
		<div
			class="collaborate container card p-5 has-text-left is-clickable"
			@mouseenter="isHovered = true"
			@mouseleave="isHovered = false"
		>
			<h2>
				Let’s
				<br />
				<span class="text-highlight">collaborate</span>
			</h2>
			<p class="text py-2">
				Unlock the potential of your product with expert design and development
				services. Let’s collaborate to create user-centered solutions that not
				only meet your goals but also delight your users.
			</p>
			<IconWrapper icon="arrow" :tilted="true" :hovered="isHovered" />
		</div>
	</router-link>
</template>

<style lang="scss" scoped>
.collaborate {
	color: var(--text-color);
	position: relative;
	letter-spacing: 0em;

	.text {
		color: var(--text-color-grey);
		line-height: 1.2em;
	}

	&:hover {
		background-color: var(--bg-purple);

		.text-highlight {
			color: var(--text-color);
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: 38px;
		}
	}
}
</style>
