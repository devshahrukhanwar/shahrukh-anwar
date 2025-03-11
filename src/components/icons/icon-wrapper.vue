<script setup lang="ts">
import { icons } from '@/config';

interface Props {
  icon: string
  tilted?: boolean
  hovered?: boolean
}

withDefaults(defineProps<Props>(), {
  tilted: false,
  hovered: false
})
</script>

<template>
  <div class="arrow" :class="{'is-hovered': hovered}">
    <i :class="[icons[icon], {'is-tilted': tilted, 'is-hovered': hovered}]"></i>
  </div>
</template>

<style lang="scss" scoped>
.arrow {
  top: 8%;
  right: 3%;
  color: var(--text-color);
  padding: 25px;
  position: absolute;
  display: inline-block;
  border-radius: 30px;
  background-color: var(--bg-purple);

  i {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    position: absolute;
    font-size: 24px;

    &.is-tilted {
      transform: translate(50%, -50%) rotate(45deg);
    }
    &.is-hovered {
      color: var(--text-highlight);
    }
  }

  &.is-hovered {
		background-color: var(--bg-white);
	}
}
</style>