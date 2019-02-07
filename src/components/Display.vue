<template>
  <div class="display">
    <b-card class="text-center cardData" v-for="message in logmessages" :key="message.data">
        {{ message }}
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue';
import config from '../config';

export default Vue.extend({
  name: 'Display',
  data() {
    return {
      logmessages: [],
    };
  },
  created() {
    const url = config.websocketurl;
    const connection = new WebSocket(url);
    connection.onmessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);
      console.log(message.log);
      this.logmessages.push(message.log);
      console.log(this.logmessages);
    };
  },
});
</script>

<style scoped>
    .cardData   {
        margin-top: 10px;
    }
</style>
