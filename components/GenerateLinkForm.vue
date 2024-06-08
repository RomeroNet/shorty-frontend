<script setup lang="ts">
  const link = ref<string>('');

  const generateLink = async (event) => {
    event.preventDefault();

    const result = await GenerateLink({
      origin: 'potatoes',
      destination: link.value
    });

    console.log(result);
  }
</script>

<template>
<form>
  <label for="url">URL</label>
  <input
      type="text"
      id="url"
      name="url"
      required
      v-model="link"
  >
  <button @click="generateLink" type="submit">Generate Link</button>
</form>
</template>

<style scoped>

</style>