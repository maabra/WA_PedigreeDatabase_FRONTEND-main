
<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/">Naslovnica</router-link>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/compare">Usporedba</router-link>
          </div>
          <div class="navbar-nav">
            <router-link to="/list">Lista pasa</router-link>
          </div>
        </div>
        <div class="navbar-nav">
          <router-link to="/adddog">Dodaj psa</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5c5c5;
}
body {
  background-color: rgb(36, 0, 0);
}
nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #0000005b;
    &.router-link-exact-active {
      color: #5f5f5f;
    }
  }
}
</style>