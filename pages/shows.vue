<template>
  <section class="container">
    <h2 class="container__title" data-title="Shows">Shows</h2>
      <Show/>
  </section>
</template>
<script>
import '~/assets/icons/youtube'
import Show from '~/components/Show'

export default {
  components: {
    Show
  }
}
</script>
<style lang="scss">
</style>
