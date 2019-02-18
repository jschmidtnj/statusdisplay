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
// The query parameter is useful for getting values from a basic websocket
// Query parameterr below
// import Controller from path

// import { setScheduler } from 'bluebird';
// import { delay } from 'bluebird';
// REMOVE numberCount and everything containing numberCount
// let numberCount = 0;

// Only one export per module
// export default controller.extend({
//   name: 'query',
//   data() {
//     return {
//       query: ['messageType']
//     }
//   }
// })

export default Vue.extend({
  name: 'Display',
  data() {
    return {
      logmessages: [],
    };
  },
  created() {
    // To get information from Link Controller/Cognitive engine
    const url = config.websocketurl;
    const connection = new WebSocket(url);

    // UNCOMMENT - Fix the url that it is on in config.js. ----------
    // Sets up websocket for Symphony toasts
    const urlSymph = config.websocketurlSymph;
    const connectionSymph = new WebSocket(urlSymph);
    // --------------------------------------
    // UNCOMMENT - Websocket setup for Cisco router--------------------------
    // Sets up websocket for Cisco router toasts
    const urlCSR = config.websocketurlCSR;
    const connectionCSR = new WebSocket(urlCSR);
    // ------------------------------------
    // UNCOMMENT - GET for Cisco router-----------------
    /* Get messages regarding status from router - this
       will only work if the Cisco router has a websocket that it export toasts from */
    connectionCSR.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // Find out the format of the JSON
      // const logger = message.something;
      // Right now it does not send anything to logmessages
      console.log(message);
      JSON.parse(this.logmessages.log);
    };
    // -----------------------

    // UNCOMMENT ------------------------------------------
    // // Should result in a GET request from the Router
    // // A GET request for the bandwidth
    // /* This will likely result in getting multiple throughputs from
    //    different ports like GigabitEthernet2 */
    // // To perform an HTTP GET request:
    // // Try the GET request wutg teg cinfig.html
    // function httpGet(urlForCSR) {
    //   const xmlHttp = new XMLHttpRequest();
    //   // Put false for synchronous requests
    //   xmlHttp.open('GET', urlForCSR, true);
    //   xmlHttp.send(null); // Maybe remove the send

    //   // // Could just put => and remove the ev
    //   // // eslint-disable-next-line
    //   // xmlHttp.onload = (ev) => {
    //   //   console.log(xmlHttp.responseText);
    //   // };

    //   return xmlHttp.responseText;
    // }

    // // Check if these variables (valueT and valueTime) can be used twice
    // console.log(httpGet(config.websocketurlCSR));
    // const valueT = [];
    // const dates = `${new Date()}`;
    // valueT.push(httpGet(config.websocketurlCSR));
    // valueT.push(dates);
    // // Use the .shift() when it gets to large - Put an if statement here
    // if (this.logmessages.length > config.numberElements) {
    //   this.logmessages.shift();
    // }

    // // http
    // // Enable the .shift if re-using
    // // valueT.shift();

    // // Delete this stuff if it prevents other stuff from copying
    // ------------------------------------------------------------------

    // UNCOMMENT only one of these - the above or below

    // UNCOMMENT ------------------------------------------------------------------
    // // OR USE the onload function
    // // Could use onload instead
    // const valueT = [];
    // const dates = `${new Date()}`;

    // const xmlHttp = new XMLHttpRequest();
    // xmlHttp.open('GET', 'http://localhost:8080/api/v1/cisco/interfaces/stats');

    // xmlHttp.onload = () => {
    //   console.log(xmlHttp.responseText);
    //   valueT.push(xmlHttp.responseText);
    //   valueT.push(dates);
    // };

    // if (this.logmessages.length > config.numberElements) {
    //   this.logmessages.shift();
    // }
    // -------------------------------------------------------


    // UNCOMMENT Below ----------------------------------------------------------------------
    // Outputs messages from Symphony web socket
    // Should get Symphony toasts
    // Sends the Symphony toasts to cards
    connectionSymph.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // Message body sends it to one of the cards
      const logger = message.body;
      // Prints all messages from Symphony
      console.log(message.body);

      // One of these two if statements should work:
      // To test - Have Symphony, the router, and this on the same network
      // Change the number 20
      // Could use device status change from the types - sends a value with key "type"
      // Change 'Device Status Change' to what the message's words of the message actually are
      // Maybe use the message itself(body) to identify the needed
      // message if (message.body === 'Device...') {
      if (message.entityType === 'Device Status Change') {
        // this.logmessages.push(logger);
        const valueTim = [];
        const tim = `${new Date()}`;
        // Sends the message and time
        valueTim.push(logger);
        valueTim.push(tim);
        // const value = valueTim.pop();
        // valueTim.push(value);
      }

      // ONLY NEED ONE OF THESE IF STATEMENTS need to be there ^ or :

      // Change the message in the quotes to the base message that is wanted
      if (logger.substring(0, 20) === 'The start of the message') {
        // this.logmessages.push(logger);
        const valueTim = [];
        const tim = `${new Date()}`;
        // Sends the message and time
        valueTim.push(logger);
        valueTim.push(tim);
      }

      // // Could add another if statement that allows another type of notification through
      // // Change the message in the quotes to the base message that is wanted
      // if (logger.substring(0, 20) === 'The start of the message') {
      //   // this.logmessages.push(logger);
      //   const valueTim = [];
      //   const tim = `${new Date()}`;
      //   // Sends the message and time
      //   valueTim.push(logger);
      //   valueTim.push(tim);
      // }
    };

    if (this.logmessages.length > config.numberElements) {
      this.logmessages.shift();
    }
    // ---------------------------------------------------------------------------------------------

    connection.onmessage = (event) => {
      const valueTime = [];
      const time = `${new Date()}`; // Should be a string timestamp
      const message = JSON.parse(event.data);

      // eslint-disable-next-line
      console.log(message.log);
      // Prints the source which was added in app.js where it is added to the body
      console.log(message.src);

      // Prints the time stamp without the timezone
      valueTime.push(message.log);
      // Prints the time without the timezone
      valueTime.push(time.substring(0, 24)); // Removes timezone
      this.logmessages.push(valueTime);
      console.log(this.logmessages);

      // Removes the top card when the total number of cards exceeds the threshold
      if (this.logmessages.length > config.numberElements) {
        this.logmessages.shift();
      }

      // Number of printed cards - At the end this is controlled by config.numberElements
      console.log('Number of Comments Length:');
      console.log(this.logmessages.length);

      // Scrolls the page when the user is at the bottom of the screen
      function pageScroll() {
        window.scrollTo(0, (document.body.scrollHeight));
      }

      /* This Number can be changed to reflect the amount of maximum scroll up that
         still initiates an automatic scroll down. */
      const maxUpScroll = 0;
      if ((document.body.scrollHeight - window.innerHeight) - window.pageYOffset < maxUpScroll) {
        console.log('Will Scroll');
        setTimeout(pageScroll, 1);
      } else {
        console.log('Will NOT Scroll');
      }

      // Remove Scroll Height from the console log
      console.log('Scroll Height:');
      console.log(document.body.scrollHeight);
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

        /* Uncomment to start dark theme AND look at App.vue */
        /* border-color: rgb(100, 100, 100);
        border-width: 3px;
        background-color: rgb(30, 30, 30); */

        font: 15px Arial;
        letter-spacing: 1px;
        font-weight: 50;
    }

    /* Uncomment to start dark theme */
    /* .foot {
      color: rgb(200, 200, 200);
      background-color: rgb(30, 30, 30);
      border-color: rgb(30, 30, 30);
    } */
</style>
