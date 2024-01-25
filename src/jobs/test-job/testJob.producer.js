const Bull = require('bull');
const { createClient } = require('@data/bull/bull');
const testJobProducer = new Bull('testJobProducer', {
  createClient,
  defaultJobOptions: {
    attempts: 5,
    backoff: 5000,
    removeOnComplete: true,
  },
});

const jobName = Object.freeze({
  TEST_JOB: 'testJob',
});

testJobProducer.on('completed', async (job) => {
  console.log(`->  job: has been completed.`);
});

testJobProducer.on('failed', async (job) => {
  console.log(`->  job: failed successfully.`);
});

testJobProducer.on('waiting', async (job) => {
  console.log(`-> ${job.queue.name} ${job.name} job: is waiting...`);
});

module.exports = {
  jobName,
  testJobProducer,
};
