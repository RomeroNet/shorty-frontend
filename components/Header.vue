<template>
  <header>
    <div class="title">
      <h1 class="main-title">Shorty</h1>
    </div>
    <div class="nav">
      <NavigationBar />
    </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    width: 100%;
    padding: 1% 0.5%;
    background-color: rgb(213 252 255);

    .title {
      flex: 0 0 auto;

      .main-title {
        font-family: CroissantOne, sans-serif;
        font-size: 3rem;
        line-height: 4rem;
      }
    }

    .nav {
      flex: 1 0 auto;
    }
  }

  h1 {
    padding: 0;
    margin: 0;
  }
</style>