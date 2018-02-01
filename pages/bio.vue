<template>
  <section class="bio-container">
    <h2 class="bio-container__title" data-title="Bio">Bio</h2>
    <p class="bio-container__text">
      Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock.
      Hit you unexpectedly mice for eat prawns daintily with a claw then lick paws clean wash down prawns with
      a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking
      a catnap. Stare out the window howl on top of tall thing bleghbleghvomit my furball really tie the room
      together. Small kitty warm kitty little balls of fur you have cat to be kitten me right meow, for sweet
      beast, and thinking longingly about tuna brine yet leave hair everywhere, for who's the baby, yet scamper.
      Friends are not food.
    </p>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="scss">
@import "~assets/style/variables";

.bio-container {
  padding-top: 96px;
  padding-left: 128px;

  &__title {
    @include fancy-title;
  }

  &__text {
    width: 50%;
  }
}
</style>
