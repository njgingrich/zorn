<template>
  <section class="main-container">
    <h1 class="main-container__name">Sean Zorn</h1>
    <p>I do comedy.</p>

    <nav class="main-navigation">
      <nuxt-link to="bio" class="main-navigation__link">Bio</nuxt-link>
      <nuxt-link to="shows" class="main-navigation__link">Shows</nuxt-link>
      <nuxt-link to="contact" class="main-navigation__link">Contact</nuxt-link>
    </nav>
  </section>
</template>

<script>
export default {
  transition: 'main'
}
</script>

<style lang="scss">
@import "~assets/style/variables";

.main-container {
  padding-top: 128px;
  padding-left: 128px;

  &__name {
    @include title;
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
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.675);

    &:hover, &:visited {
      color: $color-text-light;
    }

    &:hover {
      color: $color-text-highlight;
      letter-spacing: 0.15em;
      transform: skewX(-16deg);
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
