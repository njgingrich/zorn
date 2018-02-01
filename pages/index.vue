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
}
</script>

<style lang="scss">
@import "~assets/style/variables";

.main-container {
  padding-top: 200px;
  padding-left: 200px;

  &__name {
    @include title;
  }
}

.main-navigation {
  display: flex;
  width: fit-content;
  flex-direction: column;
  padding-top: 128px;

  &__link {
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 32px;
    letter-spacing: 0.05em;
    color: $color-text-light;
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.675);

    &:hover, &:visited {
      color: $color-text-light;
    }

    &:hover {
      letter-spacing: 0.15em;
      transform: skewX(-16deg);
    }
  }
}
</style>
