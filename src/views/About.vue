<template>
  <div class="about">
    <h1>{{title}}</h1>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="mb-5">
            Displays the current link(s) that are being used and the bandwidth of each link.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About',
    };
  },
};
</script>

<style scoped>
</style>
