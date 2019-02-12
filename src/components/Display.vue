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
// import { setScheduler } from 'bluebird';
// import { delay } from 'bluebird';

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
    // let tester = false;
    // let happen = true;
    connection.onmessage = (event) => {
      // function scroller() {
      // }
      // setTimeout(scroller(), 10000);

      console.log(event);
      const message = JSON.parse(event.data);
      console.log(message.log);
      this.logmessages.push(message.log);
      console.log(this.logmessages);
      if (this.logmessages.length > config.numberElements) {
        this.logmessages.shift();
        // happen = false;
      }
      // const num = this.logmessages.length;

      console.log('Number of Comments Length:');
      console.log(this.logmessages.length);

      // function pageScroll() {
      //   window.scrollTo(0, document.body.scrollHeight);
      //   // setTimeout(pageScroll, 5000); // Change back to 1 from 5000
      //   setTimeout(pageScroll, 1);
      //   // Interval of 10 secs
      //   // setInterval(pageScroll, 10000);
      // }
      // pageScroll();

      // const placement = document.getElementById('app');
      // const placement = document.body.scrollTop;

      // console.log(window.pageYOffset);
      // console.log(window.screenY);
      // console.log('Inner Height:');
      // console.log(window.innerHeight);
      // console.log('Scroll Height:');
      // console.log((document.body.scrollHeight - window.innerHeight) - window.pageYOffset);
      // if ((((document.body.scrollHeight - window.screenY)) - (window.pageYOffset))
      //   < (window.screenY * 3.3)) {
      //   console.log('Would Scroll');
      // }

      function pageScroll() {
        window.scrollTo(0, (document.body.scrollHeight));
      }

      // This Number can be changed to reflect the amount of maximum scroll up that
      // still initiates an automatic scroll down
      if ((document.body.scrollHeight - window.innerHeight) - window.pageYOffset < 0) {
        console.log('Will Scroll');
        // tester = true;
        setTimeout(pageScroll, 1);
      } else {
        console.log('Will NOT Scroll');
        // tester = false;
        // console.log(tester);
      }

      console.log('Scroll Height:');
      console.log(document.body.scrollHeight);

      // if (tester) {
      //   console.log(tester);
      //   // eslint-disable-next-line
      //   function pageScroll() {
      //     // if (num === config.numberElements) {
      //     //   if (happen) {
      //     //     // document.getElementById('app').scrollTop
      //     //     // = document.getElementById('app').scrollHeight;
      //     //     window.scrollTo(0, (document.body.scrollHeight));
      //     //     console.log('Over Fifty. On 15');
      //     //   } else {
      //     //     // document.getElementById('app').scrollTop
      //     //     // = document.getElementById('app').scrollHeight;
      //     //     window.scrollTo(0, (document.body.scrollHeight));
      //     //     console.log(document.body.scrollHeight - 428);
      //     //     console.log('Over Fifty. Over 15');
      //     //   }
      //     // } else {
      //     //   // const objDiv = document.getElementById('app');
      //     //   // objDiv.scrollTop = objDiv.scrollHeight;
      //     //   window.scrollTo(0, (document.body.scrollHeight));
      //     // }

      //     window.scrollTo(0, (document.body.scrollHeight));
      //     // setTimeout(pageScroll, 5000); // Change back to 1 from 5000
      //     // Interval of 10 secs
      //     // setInterval(pageScroll, 10000);

      //     // const tim = setTimeout(pageScroll, 1);
      //     // function timtime() {
      //     //   clearTimeout(tim);
      //     // }

      //     // const tes = setTimeout(pageScroll, 1000);
      //     // function clearer() {
      //     //   console.log(tes);
      //     //   clearTimeout(tes, 100000);
      //     // }
      //     // setTimeout(clearer, 1);

      //     // pageScroll();
      //   }
      //   // Waits for the Mesage to come through
      //   setTimeout(pageScroll, 1);

      //   // Maybe move pagescroll inside the if statement
      //   // window.scrollTo(0, document.body.scrollHeight);
      //   // window.scrollTo(0, (document.body.scrollHeight));
      // }
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
