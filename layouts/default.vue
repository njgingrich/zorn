<template>
  <div class="page">
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

.page {
  min-height: 100vh;

  background-image: url("~assets/standup_raw.png");
  background-size: cover;
}
</style>
