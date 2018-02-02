<template>
  <section class="main-container">
    <h1 class="main-container__name">Sean Zorn</h1>
    <p>I do comedy.</p>

    <nav class="main-navigation">
      <nuxt-link to="bio" class="main-navigation__link">Bio</nuxt-link>
      <nuxt-link to="shows" class="main-navigation__link">Shows</nuxt-link>
      <nuxt-link to="contact" class="main-navigation__link">Contact</nuxt-link>
      <aside class="main-navigation__social">
        <a href="https://www.twitter.com/sean_zorn" target="_blank" class="main-navigation__social--link">
          <svgicon name="twitter" class="main-navigation__social--icon"/>
        </a>
        <a href="https://www.youtube.com/channel/UCkIPE3QlyroE0VBbrAXBgyQ" target="_blank" class="main-navigation__social--link">
          <svgicon name="youtube" class="main-navigation__social--icon"/>
        </a>
      </aside>
    </nav>
  </section>
</template>

<script>
import '~/assets/icons/twitter'
import '~/assets/icons/youtube'

export default {
  transition: 'main'
}
</script>

<style lang="scss">
@import "~assets/style/variables";

.main-container {
  padding-top: 12vh;
  padding-left: 12vw;
  max-width: 88vw;

  &__name {
    @include title;
  }

  @media screen and (min-width: $bp-sm) {
    padding-top: 24px;
  }
}

.main-navigation {
  display: flex;
  width: fit-content;
  flex-direction: column;
  padding-top: 96px;

  &__link {
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.05em;
    color: $color-text-light;
    transition: all 0.3s $bounce-bezier;

    &:hover, &:visited {
      color: $color-text-light;
    }

    &:hover {
      color: $color-text-highlight;
      letter-spacing: 0.15em;
      transform: skewX(-16deg);
    }
  }

  &__social {
    display: flex;
    margin-top: 8px;

    &--icon {
      margin-right: 16px;
      width: 36px;
      height: 36px;
      fill: $blue;
      transition: all 0.4s $bounce-bezier;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

// Transitions
.main-enter-active, .main-leave-active {
  transition: all .3s ease-in-out;
}

.main-enter {
  transform: translateX(-300px);
  opacity: 0;
}

.main-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
