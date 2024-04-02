const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000';

const getDataFromAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getDataFromAPI };
