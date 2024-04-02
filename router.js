const express = require('express');
const service = require('./service');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await service.getDataFromAPI();
    res.send(result);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;