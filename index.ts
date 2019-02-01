import * as express from 'express';
const crypto = require('crypto');

const secret = process.env.SECRET || 'some random hard-coded secret';

const app = express.default();
const port = process.env.API_PORT || 8080;

let counter = 0;
const MAX_COUNTER = 9719925474991;

app.get('/', (request, response) => {
  counter++;

  // secure!
  if (counter % MAX_COUNTER === 0) {
    counter = 1;
  }

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(counter.toString());
  const digest = hmac.digest('hex');

  response.send(digest);
});

app.listen(port, () => console.log(`started server on ${port}`));
