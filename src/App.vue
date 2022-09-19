<template>
  <div id="app">
    Pedigree
    <img src="./assets/home.png" alt="Vue logo"
    contain
    height="100px"
    width="127px"
    >
    Database
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/adddog">Add Dog</router-link> -
      <router-link to="/compare">Compare</router-link> -
      <router-link to="/dog">Dog</router-link> -
      <router-link to="/list">List</router-link>
      
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
body {background-color: rgb(0, 0, 0);}
nav {
  padding: 5px;
  a {
    font-weight: bold;
    color: #df7d0d5b;
    &.router-link-exact-active {
      color: #fff783;
    }
  }
}
</style>
