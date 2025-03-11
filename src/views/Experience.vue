<script setup lang="ts">
import { ref } from 'vue';
import { totalExperience } from '@/utils';
import { IconWrapper } from '@/components';

const isHovered = ref(false);
</script>

<template>
  <div
    class="columns is-block experience"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="column has-text-left has-text-centered-mobile pb-5">
			<p class="heading">
				Over {{ totalExperience }} Years of <br /> Design <span class="text-highlight">Expertise</span>
			</p>
    </div>
    <div class="column card has-text-left ml-3 companies">
      <IconWrapper icon="arrow" :tilted="true" :hovered="isHovered" />
      <div class="column p-0">
        <div class="column py-0 name">PixelForge Studios</div>
        <div class="column pb-2 pt-1 is-three-quarters detail">
          Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.
        </div>
        <div class="column pb-1 tenure">
          Jan 2020 - Present
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
	.heading {
		font-size: 68px;
    font-weight: 550;
		line-height: 1.1em;
	}
  .companies {
    cursor: pointer;
    position: relative;

    .name {
      color: var(--text-color);
      font-size: 28px;
      font-weight: 550;
    }
    .detail {
      color: var(--text-color-grey);
      font-size: var(--text-small-font-size);
    }
    .tenure {
      color: var(--text-color-grey);
      font-size: var(--label-font-size);
    }

    &:hover {
      background-color: var(--bg-purple);

      .name, .detail, .tenure {
        color: var(--text-color);
      }
    }
  }
}
</style>
