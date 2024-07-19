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
    width: 80%;
    margin: 0 auto;

    main {
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }
  }
</style>
