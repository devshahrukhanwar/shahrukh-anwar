<script setup lang="ts">
import { getDate, formattedText } from '@/utils';
import { type BlogSchema } from '@/stores/thoughts/schema';

interface Props {
	data: BlogSchema
	isLink?: boolean
	tags?: boolean
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
				<div class="card-title is-inline-flex is-align-items-center">
					<span>{{ formattedText(data.title, 80) }}</span>
					<span class="ml-2" v-if="isLink">
						<i class="fa-solid fa-arrow-right-long"></i>
					</span>
				</div>
				<div class="subtitle mt-2" v-if="data?.subtitle">{{ data?.subtitle }}</div>
				<div class="source text-highlight" v-if="data?.source">({{ data?.source }})</div>
				<div class="tags" v-if="tags">
					<span class="tag" v-for="tag in data?.tags" :key="tag">{{ tag }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	background-color: var(--card-bg-color);

	.card-title {
		color: var(--text-color);
		font-size: 20px;
		line-height: 1.2;
		font-weight: normal;

		i {
			rotate: -45deg;
			font-size: 18px;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		}
	}
	.subtitle, .date {
		color: var(--text-color-grey);
		font-size: var(--label-font-size);
	}
	.tags {
		.tag {
			color: var(--text-color);
			background-color: var(--text-highlight);
		}
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
    .card-title {
			i {
				color: var(--text-highlight);
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