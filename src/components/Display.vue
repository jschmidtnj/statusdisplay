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
      if (this.logmessages.length > config.numberElements) {
        this.logmessages.shift();
      }
      console.log(document.body.clientHeight);
      function pageScroll() {
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(pageScroll, 1);
      }
      pageScroll();
    };
  },
});
</script>

<style scoped>
    .cardData   {
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 10px;
        box-shadow: 3px 3px 3px 2px rgb(100, 100, 100);
        font: 15px Arial;
        letter-spacing: 1px;
        font-weight: 50;
    }
</style>
