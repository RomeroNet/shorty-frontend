<script setup lang="ts">
  const link = ref<string>('');
  const buttonDisabled = ref<boolean>(true);
  const shortenedLink = ref<string>('');

  const host = useRequestURL().hostname;

  const origin = GenerateOrigin();

  const generateLink = async (event: Event) => {
    event.preventDefault();

    buttonDisabled.value = true;

    shortenedLink.value = await GenerateLink({
      origin: origin,
      destination: link.value
    });
  }
</script>

<template>
  <div>
    <form>
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
          :class="{ disabled: link.length <= 0 }"
      >Shorty!</button>
    </form>

    <p
        :class="{ hidden: shortenedLink.length <= 0 }"
    >Your link is: https://{{ host }}/{{ shortenedLink }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;

  form {
    border: 3px solid rgb(25, 238, 255);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
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

  p {
    text-align: center;

    &.hidden {
      display: none;
    }
  }
}

</style>