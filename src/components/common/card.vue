<script setup lang="ts">
import { getDate } from '@/utils';

interface Card {
	title: string;
	banner: string;
	date?: string;
	subtitle?: string;
}

interface Props {
	data: Card;
	isLink?: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="column card is-narrow p-0 is-clickable">
		<div class="column is-narrow is-align-items-center p-0">
			<div class="column banner p-0">
				<img :src="data.banner" :alt="data.title">
			</div>
			<div class="column has-text-left py-4">
				<div class="date mb-3" v-if="data?.date">
					{{ getDate(data?.date) }}
				</div>
				<div class="title is-inline-flex is-align-items-center">
					<span>{{ data.title }}</span>
					<span class="ml-2" v-if="isLink">
						<i class="fa-solid fa-arrow-right-long"></i>
					</span>
				</div>
				<div class="subtitle mt-2" v-if="data?.subtitle">{{ data?.subtitle }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	background-color: var(--card-bg-color);

	.title {
		color: var(--text-color);
		font-size: 24px;
		font-weight: normal;

		i {
			rotate: -45deg;
			font-size: 18px;
			// transform: scaleX(1.3);
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		}
	}
	.subtitle, .date {
		color: var(--text-color-grey);
		font-size: var(--text-small-font-size);
	}
  .column.banner {
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
  .banner {    
    width: 100%;
    height: 200px;

    img {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
  }

	&:hover {
    .title {
      color: var(--text-highlight);

			i {
				transform: scaleX(1.3) translateX(2px);
				transition: transform 0.5s ease;
			}
		}
    img {
      transform: scaleX(1.05) scaleY(1.05);
    }
	}
}
</style>