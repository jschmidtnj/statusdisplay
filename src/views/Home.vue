<template>
  <div class="home">
    <Display />
  </div>
</template>

<script>
// @ is an alias to /src
import Display from '@/components/Display.vue';

export default {
  name: 'home',
  components: {
    Display,
  },
};
</script>
