const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
});

module.exports = instance;
