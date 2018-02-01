<template>
  <section class="shows-container">
    <h2 class="shows-container__title" data-title="Shows">Shows</h2>
    <section class="show">
      <img class="show__image" src="~assets/flirting_with_failure.jpg"/>
      <div class="show__content">
        <h3 class="show__title">Flirting with Failure</h3>
        <p class="show__description">
          A one man stand up comedy show written and performed by Sean Zorn.
        </p>
        <a href="https://www.youtube.com/watch?v=RTBjoYn3Heg" target="_blank" class="show__watch--link">
          <svgicon name="youtube" class="show__watch--icon"/>
        </a>
      </div>
    </section>
  </section>
</template>
<script>
import '~/assets/icons/youtube'

export default {
}
</script>
<style lang="scss">
@import "~assets/style/variables";

.shows-container {
  padding-top: 96px;
  padding-left: 128px;
  max-width: 800px;

  &__title {
    margin-bottom: 32px;
    @include fancy-title;
  }
}

.show {
  display: flex;
  margin-bottom: 16px;

  &__image {
    max-width: 200px;
    max-height: 300px;
  }

  &__content {
    display: flex;
    padding-left: 16px;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 8px;
    font-size: 28px;
  }

  &__description {
    margin-bottom: 16px;
    font-size: 16px;
  }

  &__watch {
    &--icon {
      padding-left: 4px;
      padding-bottom: 4px;
      width: 64px;
      height: 64px;
      transition: all 0.1s ease-in-out;
      animation: bounce 400ms linear infinite;
      animation-play-state: paused;

      fill: $purple;

      &:hover {
        padding-left: 0;
        padding-bottom: 0;
        width: 68px;
        height: 68px;
      }
    }

    &--link {
      margin-top: auto;
    }
  }
}
</style>
