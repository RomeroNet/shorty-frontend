<script setup lang="ts">
  const currentYear = GetCurrentYear();
</script>

<template>
  <footer>
    <div class="footer">
      <p data-test="first-paragraph">Made with ❤️ from Málaga, Spain</p>
      <p data-test="second-paragraph">RomeroNet, 2023 - {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: rgb(213 252 255);
    text-align: center;
  }
</style>