<template>
  <div class="display">
    <b-card class="text-center cardData" v-for="message in logmessages" :key="message.data">
        {{ message[0] }}
        <b-card-footer class="foot">
          {{ message[1] }}
        </b-card-footer>
    </b-card>
  </div>
</template>
<style lang="scss">
    .foot  {
      color: grey;
      font-family: courier;
      font-size: 75%;
      text-align: right;
      padding: 2px;
      // margin-left: 85%;
      border-color: white;
      background-color: white;
      margin-top: 5px;
    }
  </style>

<script>
// Has to be integrated with the Link Controller and need to know what the link controller talks to

import Vue from 'vue';
import config from '../config';
// import { setScheduler } from 'bluebird';
// import { delay } from 'bluebird';
// REMOVE numberCount and everything containing numberCount
// let numberCount = 0;

export default Vue.extend({
  name: 'Display',
  data() {
    return {
      logmessages: [],
      // times: [],
    };
  },
  created() {
    const url = config.websocketurl;
    const connection = new WebSocket(url);
    // let tester = false;
    // let happen = true;
    // Receives messages from the link controller
    connection.onmessage = (event) => {
      // function scroller() {
      // }
      // setTimeout(scroller(), 10000);
      const valueTime = [];
      // let timeST = '';
      // valAndTime.push(4);

      // UNCOMMENT For Use when adding the req.headings string - chack if localhost:3030
      // is significant or not
      // Uncomment the three below if trying to add the JSON with the host
      // console.log(event.data);
      // const message = JSON.parse(JSON.parse(event.data));
      // console.log(message.host);
      // const webso = new WebSocket("ws://localhost:8080/") // Change out of websocket OR Remove it and replace it with $http.post...
      // Use to build a new message receiver that gets the information from the http document
      // $http.post('http://localhost:8080/api/v1/cisco/interfaces/stats', messageTotal) {
      // // Abd - Returns the bandsigth, if it is 0, it switches links
      //   totalBandwidth = messageTotal.JSON;
      // }

      // Abd - Attains information on the 5 GHz wifi link in the router and 8 errors below
      // const ipAdd = '1.1.1.111';

      // // eslint-disable-next-line
      // $interval(function() {
      //   // eslint-disable-next-line
      //   $http.get('http://' + ipAdd, messageBody).success(function (response) {
      //     console.log(response);
      //   });
      // });

      // const ws = new WebSocket(`ws:// ${ipAdd}/api/v1/cisco/interfaces/stats`);

      // ws.onopen = function() {
      //   console.log('Speaking to Cisco router');
      // };

      // ws.onmessage = function(mes) {
      //   const receivedmsg = JSON.parse(mes.data);
      //   concole.log(mes);
      //   //body is one aspect that coms out of here
      //   console.log(mes);
      // };

      // Time in milliseconds
      // const time = new Date().getTime();
      // const time = Date.now();
      const time = `${new Date()}`; // Should be a string timestamp
      // console.log(time.substring(0, 24));
      // const mon = time.getMonth().toFixed(2);
      // console.log(mon);
      // timeST += `${time.getFullYear()}-${time.getMonth()}`;
      // console.log(`Date: ${timeST}`);
      // const time = new Date().valueOf(); // valueOf is not producing any new String with the date
      // console.log('Time:');
      // console.log(time.valueOf());
      // console.log(time);
      // console.log(event);
      const message = JSON.parse(event.data);

      // Have to log Symphony Toasts somehow

      // eslint-disable-next-line
      console.log(message.log);
      // Prints the source
      console.log(message.src);
      // eslint-disable-next-line
      // this.logmessages.push(message.log);
      valueTime.push(message.log);
      valueTime.push(time.substring(0, 24));
      this.logmessages.push(valueTime);
      // this.times = numberCount;
      // const mess = this.logmessages + ' message';
      console.log(this.logmessages);
      if (this.logmessages.length > config.numberElements) {
        this.logmessages.shift();
        // happen = false;
        // Remove the unecessary comments
      }
      // const num = this.logmessages.length;

      // Number of printed blocks - At the end this is controlled by config.numberElements
      console.log('Number of Comments Length:');
      console.log(this.logmessages.length);
      // numberCount += 1;

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

      // Scrolls the page when the user is at the bottom of the screen
      function pageScroll() {
        window.scrollTo(0, (document.body.scrollHeight));
      }

      /* This Number can be changed to reflect the amount of maximum scroll up that
         still initiates an automatic scroll down.
      */
      if ((document.body.scrollHeight - window.innerHeight) - window.pageYOffset < 0) {
        console.log('Will Scroll');
        // tester = true;
        setTimeout(pageScroll, 1);
      } else {
        console.log('Will NOT Scroll');
        // tester = false;
        // console.log(tester);
      }

      // Remove Scroll Height from the console log
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

        /* Comment to start dark theme */
        box-shadow: 3px 3px 3px 2px rgb(100, 100, 100);

        /* Uncomment to start dark theme */
        /* border-color: rgb(100, 100, 100);
        border-width: 3px;
        background-color: black; */

        font: 15px Arial;
        letter-spacing: 1px;
        font-weight: 50;
    }
</style>
