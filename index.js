const ws = require('nodejs-websocket');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//     extended:false
// }));
const port = 3030;

app.use(express.static('static'));

// app.get('/', (req, res) => res.send('Hello World!'));

// Allows get requests from this node server
app.get('/test', (req, res) => {
  res.send('Response');
});

// Creates the Websocket server
const server = ws.createServer((conn) => {
  console.log('New connection');
  conn.on('text', (str) => {
    console.log(`Received ${str}`);
    conn.sendText(`${str.toUpperCase()}!!!`);
  });
  conn.on('close', () => {
    console.log('Connection closed');
  });
  conn.on('open', () => {

  });
  conn.on('error', () => {
    console.log("Error Ocurred");
  });
  // conn.send(JSON.stringify(req.body));
}).listen(3031);

// Allows posts to this Node server from places like ANTXLinkServer
app.post('/test', (req, res) => {
  // logs in the npm run start console
  console.log(JSON.stringify(req.body));
  console.log(req.headers);

  // Remove Below
  // const time = +new Date(); // Should be a string timestamp
  // console.log("Time:");
  // console.log(time.valueOf());
  // console.log(time);
  // console.log(event);

  // Uncomment the three below if trying to add the JSON with the host
  // var statement = JSON.stringify(req.body).substring(0, (JSON.stringify(req.body).length-1)) + ',';
  // statement += JSON.stringify(req.headers).substring(1, (JSON.stringify(req.headers).length));
  // console.log(statement);

  res.send(JSON.stringify(req.body));
  // res.send(JSON.stringify(req.headers));
  server.connections.forEach((connection) => {
    //Sends to the Display.vue
    connection.sendText(JSON.stringify(req.body));

    // Uncomment the one below if trying to add the JSON with the host
    // connection.sendText(JSON.stringify(statement));

    //This will send another message - Could instead append the two JSONs into one
    // connection.sendText(JSON.stringify(req.headers));
  });

  // connection.sendText(JSON.stringify(req.body));
  // const connection = new WebSocket(url);
  // connection.onopen = () => {
  //     //...
  //     console.log("Connection is Open");
  //   }
  // connection.onclose = () => {
  // //...
  //     console.log("Connection is Closed");
  // }
  // connection.send(JSON.stringify(req.body));
  // connection.close();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Use the following: app.put post delete
