<template>
  <section class="show">
    <h3 class="show__title">Flirting with Failure</h3>
    <div class="show__container">
      <img class="show__image" src="~assets/flirting_with_failure.jpg"/>
      <div class="show__content">
        <p class="show__description">
          A one man stand up comedy show written and performed by Sean Zorn.
        </p>
        <a href="https://www.youtube.com/watch?v=RTBjoYn3Heg" target="_blank" class="show__watch--link">
          <svgicon name="youtube" class="show__watch--icon"/>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Show'
}
</script>
<style lang="scss" scoped>
@import "~assets/style/variables";

.show {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &__image {
    max-width: 100px;
    max-height: 170px;

    @media screen and (min-width: $bp-sm) {
      max-width: 200px;
      max-height: 300px;
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
  }

  &__title {
    width: fit-content;
    padding: 8px 8px 8px 4px;
    margin-bottom: 8px;
    font-size: 28px;
    font-family: $font-title;
    color: $blue;
    background-color: rgba($true-black, 0.75);
  }

  &__description {
    margin-bottom: 16px;
    padding: 8px;
    font-size: 18px;

    background-color: rgba($true-black, 0.75);
  }

  &__watch {
    &--icon {
      padding-left: 4px;
      padding-bottom: 4px;
      width: 48px;
      height: 48px;
      transition: all 0.4s $bounce-bezier;
      fill: $blue;

      &:hover {
        padding-left: 0;
        padding-bottom: 0;
        width: 52px;
        height: 52px;
      }

      @media screen and (min-width: $bp-sm) {
        width: 64px;
        height: 64px;

        &:hover {
          width: 68px;
          height: 68px;
        }
      }
    }

    &--link {
      margin-top: auto;
    }
  }
}
</style>
