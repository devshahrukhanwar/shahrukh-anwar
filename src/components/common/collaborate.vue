<script setup lang="ts"></script>

<template>
	<div class="collaborate container card p-5 has-text-left is-clickable">
		<h2>
			Let's
			<br />
			<span class="text-highlight">collaborate</span>
		</h2>
		<p class="text py-2">
			Unlock the potential of your product with expert design and development
			services. Let’s collaborate to create user-centered solutions that not
			only meet your goals but also delight your users.
		</p>
		<div class="arrow">
			<i class="fa-solid fa-arrow-up-long first"></i>
			<i class="fa-solid fa-arrow-up-long second"></i>
		</div>
	</div>
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
	.arrow {
		position: absolute;
		top: 8%;
		right: 3%;
		padding: 25px;
		display: inline-block;
		border-radius: 30px;
		background-color: var(--bg-purple);

		i {
			top: 28%;
			right: 31%;
			font-size: 24px;
			position: absolute;
			transform: rotate(45deg);
			transition:
				transform 0.3s ease,
				color 0.3s ease;

			&.first {
				transform: translateY(45deg);
			}
			&.second {
				transform: translateY(45deg);
				opacity: 0;
				transition: opacity 0.3s ease;
			}
		}
	}

	&:hover {
		background-color: var(--bg-purple);

		.text-highlight {
			color: var(--text-color);
		}
		.arrow {
			background-color: var(--bg-white);

			i {
				color: var(--text-highlight);

				&.first {
					opacity: 0;
				}
				&.second {
					opacity: 1;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		h2 {
			font-size: 38px;
		}
	}
}
</style>
