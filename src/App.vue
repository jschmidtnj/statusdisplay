<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <br>
    <br>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
/* Uncomment to start dark theme */
//  html, body {
//    background-color: rgb(18, 18, 18);
//  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* Comment to start dark theme */
  color: #2c3e50;

  /* Uncomment to start dark theme AND look at Display.vue*/
  // color: rgb(230, 230, 230);
  // background-color: rgb(18, 18, 18);

  margin-top: 60px;
}
</style>
