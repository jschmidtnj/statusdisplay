<template>
  <div class="about">
    <h1>{{title}}</h1>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="mb-5">
            This is a livestream application running over radios, with variable fps, resolution,
            bandwidth and aspect ratio parameters.
            It uses WebRTC protocols and socket.io to enable scalable real-time video calls.
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
