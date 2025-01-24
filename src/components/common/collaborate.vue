<script setup lang="ts">
import Arrow from '@/components/icons/arrow.vue';

</script>

<template>
	<div class="collaborate container card p-5 has-text-left is-clickable">
		<h2>
			Let's
			<br>
			<span class="collab">collaborate</span>
		</h2>
		<p class="text py-2">
			Unlock the potential of your product with expert design and development services.
			Let’s collaborate to create user-centered solutions that not only meet your goals but also delight your users.
		</p>
		<div class="arrow">
			<!-- <Arrow /> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.collaborate {
		color: var(--text-color);
		position: relative;
		letter-spacing: 0em;

		h2 {
			font-size: 58px;
			font-weight: 500;
			line-height: 1.2em;

			.collab {
				color: var(--text-highlight);
			}
		}
		.text {
			color: var(--text-color-grey);
			font-size: 18px;
			line-height: 1.2em;
		}
		.arrow {
			position: absolute;
			top: 8%;
			right: 3%;
			padding: 25px;
			border-radius: 333px;
			transform: rotate(-45deg);
			background-color: var(--bg-purple);

			img {
				height: 40px;
				width: 40px;
			}
		}

		&:hover {
			background-color: var(--bg-purple);

			.collab {
				color: var(--text-color);
			}
			.arrow {
				background-color: var(--bg-white);
			}
		}
	}
</style>