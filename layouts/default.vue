<script setup lang="ts">
</script>

<template>
  <div class="full-container">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .full-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
      flex-grow: 1;
    }
  }
</style>
