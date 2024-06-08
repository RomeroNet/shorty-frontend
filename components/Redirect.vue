<script setup lang="ts">
  const props = defineProps(['origin']);

  onMounted(async () => {
    const link = await FetchLink(props.origin);
    window.location.replace(link.destination);
  });
</script>

<template>

</template>

<style scoped>

</style>