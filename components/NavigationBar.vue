<script setup lang="ts">
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <span>
            Home
          </span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <span>
            About
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    height: 100%;
  }
  ul {
    display: flex;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    align-items: center;
    max-width: 60vw;

    li {
      min-width: 7.5%;
      height: 100%;
      display: flex;
      align-content: space-between;

      a {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        cursor: default;

        span {
          margin-top: .3rem;
        }
      }
    }
  }

  a {
    text-decoration: none;
    color: black;
    transition: color 0.2s ease;
    &:not(.router-link-active):hover {
      color: gray;
    }
  }

  .router-link-active {
    font-weight: bold;
  }
</style>