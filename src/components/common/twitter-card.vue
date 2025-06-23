<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { type TwitterSchema } from '@/stores/thoughts/schema'

interface Props {
	user: TwitterSchema['twitter']['user'];
  tweets: TwitterSchema['twitter']['tweets'];
}

const currentIndex = ref(0);
let intervalId: number | undefined;

const props = defineProps<Props>();

function nextTweet() {
  if (props.tweets && props.tweets.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % props.tweets.length;
  }
}

onMounted(() => {
  if (props.tweets && props.tweets.length > 1) {
    intervalId = window.setInterval(nextTweet, 4000); // 3 seconds
  }
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="twitter-card columns card is-clickable is-block px-3">
    <div class="column pt-5">
      <i class="fa-solid fa-quote-left"></i>
    </div>
    <div class="column">
      <transition name="fade" mode="out-in">
        <div :key="currentIndex" v-html="tweets[currentIndex].text"></div>
      </transition>
    </div>
    <div class="author column is-flex is-align-items-center is-flex is-align-items-end">
      <div class="column is-flex is-align-items-end p-0">
        <div class="avatar column is-narrow is-flex is-align-items-center px-0">
          <img :src="user.profile_image_url" :alt="user.name" />
        </div>
        <div class="column">
          <div class="name">{{ user.name }}</div>
          <div class="username is-flex is-align-items-center">
            <span class="text-highlight"><i class="fa-brands fa-twitter"></i></span>/@{{ user.username }}
          </div>
        </div>
      </div>
      <div class="column is-flex is-justify-content-flex-end">
        <span class="text-highlight">#</span>webdev
        &nbsp;
        <span class="text-highlight">#</span>developerlife
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.twitter-card {
  color: var(--text-color);
  font-size: 16px;

  i.fa-solid.fa-quote-left {
    font-size: 24px;
  }
  .author {
    font-size: 14px;

    .avatar {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

  &:hover {
		background-color: var(--bg-purple);

		.text-highlight {
			color: var(--text-color);
		}
	}

  @media screen and (max-width: 768px) {
    .author {
      .avatar {
        flex: none;
      }
      .is-justify-content-flex-end {
        padding-left: 0;
        justify-content: flex-start !important;
      }

      display: block !important;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>