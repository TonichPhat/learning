const { jobName, testJobProducer } = require('./testJob.producer');

testJobProducer.process(jobName.TEST_JOB, async (job, done) => {
  let progress = 0;
  for (let i = 0; i < 100; i++) {
    progress += 10;
    job.progress(progress);
  }
  done();
});
