const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());
app.use(express.static('dist'));

app.listen(8000, () => {
  console.log('App listening on port 8000');
});
