const express = require('express');
const server = require('./server');

const app = express();

app.use('/', server);

const PORT = process.env.PROXY_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
