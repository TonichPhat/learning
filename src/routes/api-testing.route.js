const express = require('express');
const router = express.Router();
const bull = require('./api-testing/bull');

router.use(bull);

module.exports = router;
