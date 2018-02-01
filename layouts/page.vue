<template>
  <div class="page">
    <nav class="top-navigation">
      <nuxt-link to="/" class="top-navigation__link">Home</nuxt-link>
      <nuxt-link to="bio" class="top-navigation__link">Bio</nuxt-link>
      <nuxt-link to="shows" class="top-navigation__link">Shows</nuxt-link>
      <nuxt-link to="contact" class="top-navigation__link">Contact</nuxt-link>
    </nav>
    <nuxt/>
  </div>
</template>
<style lang="scss">
@import "~assets/style/variables";

html {
  font-family: $font-main;
  font-size: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  color: $color-text-light;
  background-color: $black;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.top-navigation {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 16px;

  &__link {
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
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

.page {
  min-height: 100vh;

  background-image: url("~assets/standup_raw.png");
  background-size: cover;
}
</style>
