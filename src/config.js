export default {
  websocketurl: 'ws://localhost:3031',
  // Change the port for websocketSymph to the port where Symphony is running
  // OR Change the IP Address here
  // Change the PORT
  websocketurlSymph: 'ws://localhost:8080/WebService/websocket/notifications',
  // Find the IP Address and End Point of the Router and Place it here: 10.10.100.134
  // OR Most likely this: 10.10.100.227
  websocketurlCSR: 'ws://localhost:8080/api/v1/cisco/interfaces/stats',
  // The words between the ws and the stats is the interfaceId
  // OR 'ws://localhost:8080/api/v1/cisco/interfaces/statistics' - statistics is what is on bit bucket
  // OR 'http://localhost:8080/api/v1/cisco/interfaces/stats'
  numberElements: 50,
};
