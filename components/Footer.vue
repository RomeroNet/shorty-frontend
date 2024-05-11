<script setup lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer">
      <p>Made with ❤️ from Málaga, Spain</p>
      <p>RomeroNet, 2023 - {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: rgb(213 252 255);
    text-align: center;
  }
</style>