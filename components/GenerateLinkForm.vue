<script setup lang="ts">
  const link = ref<string>('');
  const buttonDisabled = ref<boolean>(true);
  const origin = GenerateOrigin();

  watch(link, (newValue) => {
    buttonDisabled.value = newValue.length <= 0;
  });

  const generateLink = async (event: Event) => {
    event.preventDefault();

    buttonDisabled.value = true;

    const result = await GenerateLink({
      origin: origin,
      destination: link.value
    });

    console.log(result);
  }
</script>

<template>
<form>
<!--  <label for="url">URL</label>-->
  <input
      type="text"
      id="url"
      name="url"
      required
      v-model="link"
  />
  <button
      @click="generateLink"
      type="submit"
      :class="{ disabled: buttonDisabled }"
  >Shorty!</button>
</form>
</template>

<style scoped>
  form {
    border: 3px solid rgb(25, 238, 255);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    width: 30vw;
    max-height: 10vh;
    margin-top: 15vh;

    @media (min-height: 700px) {
      max-height: 5vh;
    }

    input {
      flex-grow: 2;
      padding-left: .5vw;
      background: rgb(213 252 255);
      color: rgb(0, 0, 0);
      border: none;

      &:focus {
        outline: none;
      }
    }

    button {
      border: none;
      background: rgb(213 252 255);
      color: black;
      transition: all 0.4s ease;

      &:hover {
        background: rgb(25, 238, 255);
      }

      &.disabled {
        color: gray;
        background: rgb(213 252 255);
      }
    }
  }
</style>