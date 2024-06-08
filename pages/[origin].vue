<script setup lang="ts">
  const route = useRoute();

  const urlOrigin = route.params.origin;
</script>

<template>
  <Redirect :origin=urlOrigin />
</template>

<style scoped>

</style>