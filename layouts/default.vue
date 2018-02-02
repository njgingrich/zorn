<template>
  <div class="page">
    <transition name="navbar" mode="out-in">
      <nav class="top-navigation" v-if="$nuxt.$route.name !== 'index'">
        <nuxt-link to="/"       data-title="Home"    class="top-navigation__link">Home</nuxt-link>
        <nuxt-link to="bio"     data-title="Bio"     class="top-navigation__link">Bio</nuxt-link>
        <nuxt-link to="shows"   data-title="Shows"   class="top-navigation__link">Shows</nuxt-link>
        <nuxt-link to="contact" data-title="Contact" class="top-navigation__link">Contact</nuxt-link>
      </nav>
    </transition>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "~assets/style/variables";

.container {
  margin: 10vh 6vw;
  font-size: 18px;

  @media screen and (min-width: $bp-sm) {
    max-width: 60vw;
    font-size: 24px;
  }

  @media screen and (min-width: $bp-lg) {
    max-width: 600px;
  }

  &__link {
    font-family: $font-title;
  }

  &__title {
    margin-bottom: 32px;
    @include fancy-title;
  }

  &__text {
    padding: 8px;
    font-size: 18px;
    background-color: rgba($true-black, 0.75);
  }
}

.top-navigation {
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: space-around;
  padding-top: 16px;

  &__link {
    margin-bottom: 8px;
    text-decoration: none;
    font-family: $font-title;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.05em;
    color: $color-text-light;
    transition: 0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.675);

    &:hover {
      @include fancy-title-sm;
    }
  }
}

// Transitions
.navbar-enter-active, .navbar-leave-active {
  transition: all .4s ease-in-out;
}

.navbar-enter {
  transform: translateY(-300px);
  opacity: 0;
}

.navbar-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}

</style>
