const express = require('express');
const router = express.Router();

const { testJobProducer } = require('@/jobs/test-job/testJob.producer');

router.post('/bull', async (req, res, next) => {
  try {
    const { job, data } = req.body;
    testJobProducer.add(job, data);
    return res.success({ data: {} });
  } catch (e) {
    console.log('Error', e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    return res.render('index');
  } catch (e) {
    console.log('Error:', e);
  }
});

module.exports = router;
