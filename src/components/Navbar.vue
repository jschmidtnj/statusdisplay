<template>
  <div>
    <b-navbar type="dark" variant="primary" toggleable fixed="top">
      <!-- class="nav" -->
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <!-- <b-nav-item href="/">Home</b-nav-item> -->
          <b-nav-item class="title" href="/">Link Status</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
  .title {
    text-align: center;
  }
  /* .nav {
    background-color: aliceblue;
    color: aliceblue;
  } */
</style>
