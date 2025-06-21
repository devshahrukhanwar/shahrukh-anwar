<script setup lang="ts">
// interface Card {
// 	user?: object
// }

// interface Props {
// 	data: Card
// }

// const props = defineProps<Props>();

// console.log('==========> data', props.data);
</script>

<template>
  <div class="twitter-card columns card is-clickable is-block px-3">
    <div class="column pt-5">
      <i class="fa-solid fa-quote-left"></i>
    </div>
    <div class="column">
      The AI Assistant has completely transformed the way I work! It handles my scheduling, drafts emails, and even helps me brainstorm content ideas. I can't imagine going back to doing everything manually!
    </div>
    <div class="author column is-flex is-align-items-center">
      <div class="column is-inline-flex-desktop p-0">
        <div class="column is-flex is-align-items-end p-0">
          <div class="avatar column is-narrow is-flex is-align-items-center px-0">
            <img src="https://pbs.twimg.com/profile_images/1328780631870898177/pKNfuzZP_400x400.jpg" alt="sss" />
          </div>
          <div class="column">
            <div class="name">Shahrukh Anwar</div>
            <div class="username">@shahrukhanwar58</div>
          </div>
        </div>
        <div class="column is-flex is-align-items-end is-justify-content-flex-end">
          <span class="text-highlight">#</span>webdev
          &nbsp;
          <span class="text-highlight">#</span>developerlife
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.twitter-card {
  color: var(--text-color);
  font-size: 16px;

  i {
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

  @media screen and (max-width: 768px) {
    .author {
      .avatar {
        flex: none;
      }
      .is-justify-content-flex-end {
        padding-left: 0;
        justify-content: flex-start !important;
      }
    }
  }
}
</style>